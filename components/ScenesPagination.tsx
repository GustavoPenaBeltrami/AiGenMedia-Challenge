import React, { useState} from "react";

import { Scene } from "./Scene";
import { ContentItem } from "./CurrentContent";

interface ScenesPaginationPrompt {
  content: ContentItem;
  itemsPerPage: number;
}

export const ScenesPagination: React.FC<ScenesPaginationPrompt> = ({
  content,
  itemsPerPage,
}) => {
  const [currentChapterPage, setCurrentChapterPage] = useState(0);

  const scenes = content.scenes;

  const totalPages = Math.ceil(scenes.length / itemsPerPage);
  const currentScenes = scenes.slice(
    currentChapterPage * itemsPerPage,
    (currentChapterPage + 1) * itemsPerPage
  );

  const handleChapterPageClick = (pageIndex: number) => {
    setCurrentChapterPage(pageIndex);
    const topSceneElement = document.getElementById('top-scene');
    if (topSceneElement) {
      topSceneElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div
        className="flex flex-row gap-x-10 gap-y-2 flex-wrap my-5 start-animation animate"
        id="top-scene"
      >
        {currentScenes.map((scene, index) => (
          <Scene
            key={index}
            content={content}
            scene={scene}
            index={currentChapterPage * itemsPerPage + index}
          />
        ))}
      </div>

      {totalPages > 1 && (
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
      )}
    </div>
  );
};
