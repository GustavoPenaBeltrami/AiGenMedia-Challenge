import React, { useState, useRef } from "react";
import { ContentItem } from "./ContentItem";

interface ChapterPaginationProps {
  chapterContents: any[];
  itemsPerPage: number;
}

export const ChapterPagination: React.FC<ChapterPaginationProps> = ({
  chapterContents,
  itemsPerPage,
}) => {
  const [currentChapterPage, setCurrentChapterPage] = useState(0);
  const topButtonsRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(chapterContents.length / itemsPerPage);

  const currentChapters = chapterContents.slice(
    currentChapterPage * itemsPerPage,
    (currentChapterPage + 1) * itemsPerPage
  );

  const handleChapterPageClick = (pageIndex: number) => {
    setCurrentChapterPage(pageIndex);
    topButtonsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleChapterPageClickWOMoving = (pageIndex: number) => {
    setCurrentChapterPage(pageIndex);
  };

  return (
    <div>
      {/* Paginación de capítulos */}
      <div
        ref={topButtonsRef}
        className="flex flex-wrap items-center justify-center gap-2 p-4"
        id="top-buttons"
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handleChapterPageClickWOMoving(pageIndex)}
            className={`px-3 py-1 rounded ${
              currentChapterPage === pageIndex
                ? "bg-slate-500 text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
      {/* Renderizado de los capítulos de la página actual */}
      <div className="flex flex-row gap-x-10 gap-y-2 flex-wrap my-5">
        {currentChapters.map((chapterContent, index) => (
          <ContentItem
            key={index}
            chapterContent={chapterContent}
            index={currentChapterPage * itemsPerPage + index}
          />
        ))}
      </div>

      {/* Paginación de capítulos */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-4">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handleChapterPageClick(pageIndex)}
            className={`px-3 py-1 rounded ${
              currentChapterPage === pageIndex
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