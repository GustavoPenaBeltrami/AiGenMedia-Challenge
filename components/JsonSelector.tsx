"use client";

import { useState, ChangeEvent, useEffect } from "react";

interface JsonSelectorProps {
  setJsonData: (data: any) => void; // Recibe una función para actualizar jsonData en el padre
}

export default function JsonSelector({ setJsonData }: JsonSelectorProps) {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [jsonFiles, setJsonFiles] = useState<string[]>([]);

  // Función para manejar el cambio de selección
  const handleSelectionChange = async (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const fileName = event.target.value;
    setSelectedFile(fileName);

    // Llamada a la API para obtener los datos del archivo seleccionado
    if (fileName) {
      try {
        const response = await fetch(`/api/get-json-info?file=${fileName}`);
        if (response.ok) {
          const data = await response.json();
          setJsonData(data); // Usar la función para actualizar jsonData en el padre
        } else {
          console.error("Error fetching the JSON data");
        }
      } catch (error) {
        console.error("Error fetching the JSON data:", error);
      }
    }
  };

  // Cargar la lista de archivos JSON cuando el componente se monte
  useEffect(() => {
    fetch("/api/get-jsons")
      .then((response) => response.json())
      .then((data) => {
        setJsonFiles(data);
      })
      .catch((error) => {
        console.error("Error fetching the JSON files:", error);
      });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {jsonFiles.length === 0 ? (
        <p className="mt-1 text-sm">Loading files...</p>
      ) : (
        <select
          onChange={handleSelectionChange}
          value={selectedFile}
          className="outline-none bg-slate-200 p-1 rounded-md"
        >
          <option value="" disabled>
            Select json
          </option>
          {jsonFiles.map((file: string, index: number) => (
            <option key={index} value={file}>
              {file}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
