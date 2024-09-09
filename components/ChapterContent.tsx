import AudioPlayer from "./AudioPlayer";
import { CharacterInventory } from "./CharacterInventory";
import { LocationInventory } from "./LocationInventory";
import { ModalImage } from "./ModalImage";
import { PromptData } from "./PromptData";
import Subplayer from "./SubPlayer";

interface PromptItem {
  text_segment: string;
  image_prompt: string;
  image_path: string;
  RCI?: string;
}

export interface ChapterContent {
  type: string;
  content: string;
  hash?: string;

}

interface ContentItemProps {
  chapterContent: ChapterContent;
  index: number;

  }
  const backup = `
  <>
        {chapterContent.type !== "image" && (
        <>
          {/* Title */}
          <h2 className="mb-2 text-2xl">Chapter {index + 1} </h2>
          <p className="text-md">{chapterContent.content}</p>

          {/* Audio and subtitle */}
          <div className="flex w-full items-center justify-evenly flex-wrap gap-y-4 my-5 md:my-0">
            {chapterContent.audio && (
              <div className="md:my-5">
                <p className="text-center mb-1 italic text-slate-600">
                  Chapter audio
                </p>
                <AudioPlayer src="/wav.wav" />
              </div>
            )}
            {chapterContent.subtitles && (
              <div className="md:my-5">
                <p className="text-center mb-1 italic text-slate-600">
                  Chapter subtitles
                </p>
                <Subplayer src="/srt.srt" />
              </div>
            )}
          </div>

          {/* Prompts */}
          {chapterContent.prompt && chapterContent.prompt.length > 0 && (
            <>
              <h3 className="mb-2 text-xl">Prompts</h3>
              <PromptData chapterPrompt={chapterContent.prompt[0]} />
            </>
          )}

          {/* Character Inventory */}
          {chapterContent.character_inventory && (
            <>
              <h3 className="mb-2 text-xl">Character Inventory</h3>
              {chapterContent.clothing_change && (
                <p className="ml-2 text-slate-600 mb-2 text-md">
                  Has any character changed his clothes?{" "}
                  {chapterContent.clothing_change}
                </p>
              )}
              <CharacterInventory
                characters={chapterContent.character_inventory}
              />
            </>
          )}
          {/* Location Inventory */}
          {chapterContent.location_inventory && (
            <>
              <h3 className="mb-2 text-xl mt-5">Location Inventory</h3>
              {chapterContent.scene_change && (
                <p className="text-md ml-2 text-slate-600">
                  Has any Scene changed? {chapterContent.scene_change}
                </p>
              )}
              {chapterContent.location_change && (
                <p className="text-md mb-2 ml-2 text-slate-600">
                  Has any Location changed? {chapterContent.location_change}
                </p>
              )}
              <LocationInventory
                locations={chapterContent.location_inventory}
              />
            </>
          )}
          {/* Updated Summary */}
          <div className="mb-10">
            {chapterContent.updated_story_summary && (
              <>
                <h3 className="mb-2 text-xl mt-5">Updated Story</h3>
                <p className="text-md">
                  {chapterContent.updated_story_summary}
                </p>
              </>
            )}
            {chapterContent.updated_scene_summary && (
              <>
                <h3 className="mb-2 text-xl mt-5">Updated Scene</h3>
                <p className="text-md">{chapterContent.updated_scene_summary}</p>
              </>
            )}
          </div>
        </>
      )}

      {/* Content item image */}
      {chapterContent.type === "image" && (
        <div>
          <ModalImage src={"/image.svg"} alt={chapterContent.alt} />
        </div>
      )}
  </>
  `
export const ContentItem: React.FC<ContentItemProps> = ({
  chapterContent,
  index,


}) => {
  return (
    <div className="w-full">
      <h2 className="mb-2 text-2xl">Chapter {index + 1} </h2>
      <p className="text-md">{chapterContent.content}</p>
      {chapterContent.hash && <span className="text-sm italic text-slate-400">hash: {chapterContent.hash}</span>}
      <div className="w-full h-[1px] bg-slate-300 mt-5"></div>
    </div>
  );
};