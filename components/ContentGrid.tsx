"use client";
import React, { useState } from "react";
import { ChapterContent, ContentItem } from "./ContentItem";
import { ChapterPagination } from "./ChapterPagination";

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
      <div className="w-full h-[1px] bg-slate-300 mb-10 mt-4 mx-2"></div>
      <div className="mx-2 mb-3">
        <div className="flex gap-1 items-end mt-4 font-semibold">
          <p>{currentPage + 1}.</p>
          <h2 className="text-3xl mb-[-2px]">{contentItem.label}</h2>
        </div>
        <p className="mt-2">Source: {contentItem.src}</p>
        <p>{contentItem.fragment ? `Fragment: ${contentItem.fragment}` : ""}</p>

        {/* <div className="flex flex-row gap-x-10 gap-y-2 flex-wrap my-5">
          {contentItem.chapter_contents.map((chapterContent, index) => (
            <ContentItem
              key={index}
              chapterContent={chapterContent}
              index={index}
            />
          ))}
        </div> */}

        <ChapterPagination
          key={currentPage}
          chapterContents={contentItem.chapter_contents}
          itemsPerPage={5} // Puedes ajustar esta cantidad según tu necesidad
        />
      </div>
    </div>
  );
};
