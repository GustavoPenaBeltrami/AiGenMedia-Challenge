"use client";
import { useState, useRef, useEffect } from "react";
import { ModalImage } from "./ModalImage";

export interface Shot {
  visual_description: string;
  text_segment: string;
  image_prompt: string;
  image_path: string;
  RCI: string;
}

interface ShotsProps {
  shot: Shot;
  index: number;
}

export const Shots: React.FC<ShotsProps> = ({ shot, index }) => {
  const [newPrompt, setNewPrompt] = useState<string>(shot.image_prompt);
  const [isOpen, setIsOpen] = useState(false);
  const [savedPrompt, setSavedPrompt] = useState<string>(shot.image_prompt); // Guardar el nuevo prompt
  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // Referencia para el textarea

  const handleClick = () => {
    setIsOpen(!isOpen);
    setNewPrompt(savedPrompt); // Restaurar el prompt original si se cierra sin guardar
  };

  const savePrompt = () => {
    setSavedPrompt(newPrompt); // Guardar el nuevo prompt
    setIsOpen(false);
    console.log("New prompt saved:", newPrompt); // Submit del nuevo prompt
  };

  // Ajustar la altura del textarea al contenido
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to auto to calculate the correct scrollHeight
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust to the scrollHeight
    }
  }, [newPrompt, isOpen]); // Recalcular cuando el contenido cambie o cuando el modal se abra

  return (
    <>
      <div>
        <h2 className="mb-2 text-2xl">Shot {index + 1} </h2>
        <p className="text-lg mb-2">{shot.visual_description}</p>
        <div className="bg-slate-100 my-5 mb-10 rounded-md overflow-hidden">
          <div className="md:grid-cols-3 grid-cols-1 grid-flow-row hidden md:grid">
            <p className="text-center w-full bg-slate-300 py-1">Text Segment</p>
            <div className="relative">
              <p className="top-0 text-center w-full bg-slate-300 py-1">
                Image Prompt
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-0 my-[3px] rounded-sm hover:bg-slate-400 transition-all duration-300 right-0 bg-slate-500 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="m70.2 337.4l104.4 104.4L441.5 175L337 70.5zM.6 499.8c-2.3 9.3 2.3 13.9 11.6 11.6L151.4 465L47 360.6zM487.9 24.1c-46.3-46.4-92.8-11.6-92.8-11.6c-7.6 5.8-34.8 34.8-34.8 34.8l104.4 104.4s28.9-27.2 34.8-34.8c0 0 34.8-46.3-11.6-92.8"
                  />
                </svg>
              </button>
            </div>
            <p className="text-center w-full bg-slate-300 py-1">Image</p>
          </div>

          <div className="md:grid-cols-3 grid-cols-1 grid-flow-row grid rounded-full">
            <div>
              <p className="text-center w-full bg-slate-300 py-1 md:hidden">
                Text Segment
              </p>
              <p className="p-4 text-[14px]">{shot.text_segment} </p>
            </div>
            <div>
              <p className="text-center w-full bg-slate-300 py-1 md:hidden">
                Image Prompt
              </p>
              <p className="p-4 text-[14px]">{savedPrompt} </p>
            </div>
            <div>
              <p className="text-center w-full bg-slate-300 py-1 md:hidden">
                Image
              </p>
              <div className="flex h-full items-center justify-center">
                <ModalImage src={"/image.svg"} alt={savedPrompt} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-[100vw] h-[100vh] fixed top-0 left-0 z-50 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3`}
      >
        <button
          onClick={handleClick}
          className="bg-white shadow p-3 rounded-md hover:bg-[#ccc] duration-300 transition-all"
        >
          Close
        </button>
        <div className=" bg-slate-200 p-3 rounded-md overflow-hidden max-w-[90%] w-[600px] flex flex-col">
          <textarea
            ref={textareaRef}
            value={newPrompt}
            onChange={(e) => setNewPrompt(e.target.value)}
            className="w-full p-2 outline-none bg-white rounded-sm"
            style={{ resize: "none" }} // Evita que el usuario cambie el tamaño manualmente
          />
          <button
            onClick={savePrompt}
            className="bg-slate-500 text-white p-2 rounded-md m-5"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
