"use client";
import React, { useState } from "react";
import { ContentItem, CurrentContent } from "./CurrentContent";

interface ContentGridProps {
  contents: ContentItem[];
}

export const Contents: React.FC<ContentGridProps> = ({ contents }) => {
  const [currentPage, setCurrentPage] = useState<string>(
    contents[0]?.label || ""
  );

  const currentContent = contents.find(
    (content) => content.label === currentPage
  );

  return (
    <div>
      <div className="w-full h-[1px] bg-slate-300 mb-10 mt-4 mx-2"></div>
      <div className=" flex gap-3 my-14 flex-wrap justify-center items-center">
        {contents.map((contentItem, index) => (
          <button
            className={`${
              contentItem.label === currentPage
                ? "bg-slate-500 text-white"
                : "bg-slate-200 text-slate-500"
            } rounded-md p-2 max-w-[200px]`}
            key={index}
            onClick={() => setCurrentPage(contentItem.label)}
          >
            <p className="line-clamp-2">{contentItem.label}</p>
          </button>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-10">{currentPage}</h2>

        {/* Asegúrate de que currentContent no sea undefined */}
        {currentContent ? (
          <CurrentContent content={currentContent} />
        ) : (
          <p>No content found</p> // Mensaje o componente para el caso cuando no hay contenido
        )}
      </div>

      <div className=" flex gap-3 my-14 flex-wrap justify-center items-center">
        {contents.map((contentItem, index) => (
          <button
            className={`${
              contentItem.label === currentPage
                ? "bg-slate-500 text-white"
                : "bg-slate-200 text-slate-500"
            } rounded-md p-2 max-w-[200px]`}
            key={index}
            onClick={() => setCurrentPage(contentItem.label)}
          >
            <p className="line-clamp-2">{contentItem.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
