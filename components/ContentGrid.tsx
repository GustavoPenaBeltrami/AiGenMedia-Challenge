"use client";
import React, { useState } from "react";
import { ChapterContent, ContentItem } from "./ContentItem";

interface ContentItem {
  label: string;
  src: string;
  fragment?: string | null;
  chapter_contents: ChapterContent[];
}
interface ContentGridProps {
  contents: ContentItem[];
}

export const ContentGrid: React.FC<ContentGridProps> = ({ contents }) => {
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  // Obtenemos el contenido actual basado en la página
  const contentItem = contents[currentPage];

  return (
    <div>
      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-4 pb-6">
        {contents.map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageClick(pageIndex)}
            className={`px-3 py-1 rounded ${
              currentPage === pageIndex
                ? "bg-slate-500 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>

      <div className="mx-2 mb-3">
        <div className="flex gap-1 items-end mt-4">
          <p>{currentPage + 1}.</p>
          <h2 className="text-2xl mb-[-3px]">{contentItem.label}</h2>
        </div>
        <p>Source: {contentItem.src}</p>
        <p>{contentItem.fragment ? `Fragment: ${contentItem.fragment}` : ""}</p>

        <div className="flex flex-row gap-x-10 gap-y-2 flex-wrap my-5">
          {contentItem.chapter_contents.map((chapterContent, index) => (
            <ContentItem
              key={index}
              chapterContent={chapterContent}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center px-4 py-10 gap-2">
        {contents.map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageClick(pageIndex)}
            className={`px-3 py-1 rounded ${
              currentPage === pageIndex
                ? "bg-slate-500 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
