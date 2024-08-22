"use client";

import React, { useEffect, useState } from "react";

interface SubplayerProps {
  src: string;
}

const Subplayer: React.FC<SubplayerProps> = ({src}) => {
  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Función para cargar el archivo .srt
    const loadSrtFile = () => {
      fetch(src) // Ruta relativa al archivo en public
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          return response.text();
        })
        .then((text) => {
          setFileContent(text);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading SRT file:", error);
          setError("Failed to load subtitle file.");
          setLoading(false);
        });
    };

    loadSrtFile();
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="">
      <button className="text-slate-600 bg-slate-200 p-4 rounded-md hover:text-slate-100 hover:bg-slate-600 transition-all duration-300" onClick={() => { setOpen(!open);}}>
        Preview Subtitles
      </button>
      <div
        className={` ${
          open ? "" : "hidden"
        } fixed bg-black bg-opacity-70 w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 m-auto`}
      ></div>
      <pre
        className={` ${
          open ? "" : "hidden"
        } bg-gray-100 p-4 rounded border border-gray-300 overflow-scroll fixed top-0 left-0 right-0 bottom-0 m-auto w-[80vw] h-[80vh] shadow-2xl`}
      >
        <div className="z-50 fixed top-0 mt-5 left-0 w-[100vw] flex justify-center">
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="bg-white p-2 rounded-md shadow font-2xl mb-2"
          >
            Close preview
          </button>
        </div>
        {fileContent}
      </pre>
    </div>
  );
};

export default Subplayer;
