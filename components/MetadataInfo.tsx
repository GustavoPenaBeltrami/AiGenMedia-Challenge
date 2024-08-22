import React from "react";
import { ModalImage } from "./ModalImage";

// Define el tipo de las propiedades esperadas
interface Metadata {
  author: string;
  title: string;
  identifier: string;
  language: string;
  rights: string;
  publisher: string;
  cover: string;
}

// Define el tipo de las propiedades del componente
interface MetadataInfoProps {
  metadataInfo: Metadata;
}

export const MetadataInfo: React.FC<MetadataInfoProps> = ({ metadataInfo }) => {
  return (
    <div className="flex w-full my-10 gap-10">
      <div>
        <ModalImage src={"/cover.svg"} alt="cover-image" />
      </div>
      <div>
        <span className="italic text-slate-500 text-sm">JSON Metadata info</span>
        <h1 className="text-2xl mb-2">{metadataInfo.title}</h1>
        <p>Author: {metadataInfo.author}</p>
        <p>Identifier: {metadataInfo.identifier}</p>
        <p>Language: {metadataInfo.language}</p>
        <p>Rights: {metadataInfo.rights}</p>
        <p>Publisher: {metadataInfo.publisher}</p>
      </div>
    </div>
  );
};
