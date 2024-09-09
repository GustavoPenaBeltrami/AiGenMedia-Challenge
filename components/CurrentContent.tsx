import React from "react";
import { ChapterContentPagination } from "./ChapterContentPagination";
import { ChapterContent } from "./ChapterContent";
import { Character, CharacterInventory } from "./CharacterInventory";
import { Location, LocationInventory } from "./LocationInventory";
import { ScenesPagination } from "./ScenesPagination";
import { Scene } from "./Scene";

export interface ContentItem {
  label: string;
  src: string;
  fragment?: string | null;
  chapter_contents: ChapterContent[];
  original_script: string;
  translated_script: string;
  scenes: Scene[];
  characters: Character[];
  locations: Location[];
}

export const CurrentContent: React.FC<{ content: ContentItem }> = ({
  content,
}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 mt-5 ">
        {/* Scripts */}
        <div>
          <h4 className="text-center font-semibold text-md mb-2">
            Original Script
          </h4>
          <p className=" bg-slate-200 p-4 rounded-md flex flex-col max-h-[600px] overflow-y-scroll">
            {content.original_script}
          </p>
        </div>
        <div>
          <h4 className="text-center font-semibold text-md mb-2">
            Translated Script
          </h4>
          <p className=" bg-slate-200 p-4 rounded-md flex flex-col max-h-[600px] overflow-y-scroll">
            {content.translated_script}
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-300 mt-10"></div>

      {/* Characters */}
      <h3 className="text-2xl mt-10 font-bold mb-6">Characters</h3>
      <div className="flex">
        <CharacterInventory characters={content.characters} />
      </div>
      <div className="w-full h-[1px] bg-slate-300 mt-10"></div>

      {/* Characters */}
      <h3 className="text-2xl mt-10 font-bold mb-6">Location</h3>
      <div className="flex">
        <LocationInventory locations={content.locations} />
      </div>
      <div className="w-full h-[1px] bg-slate-300 mt-10"></div>

      {/* Scene */}
      <h3 className="text-2xl mt-10 font-bold mb-6">Scene</h3>
      <ScenesPagination content={content} itemsPerPage={1} />

      {/* Chapter Contents */}
      <h3 className="text-2xl mt-10 mb-6 font-bold">Chapter Contents</h3>
      <ChapterContentPagination
        chapterContents={content.chapter_contents}
        itemsPerPage={5} // Puedes ajustar esta cantidad según tu necesidad
      />
    </>
  );
};
