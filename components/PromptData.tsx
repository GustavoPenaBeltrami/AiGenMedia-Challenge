import React from "react";
import { ModalImage } from "./ModalImage";

interface PromptItem {
  text_segment: string;
  image_prompt: string;
  image_path: string;
  RCI?: string;
}

interface PromptDataProps {
  chapterPrompt: PromptItem;
}

export const PromptData: React.FC<PromptDataProps> = ({ chapterPrompt }) => {
  return (
    <div className="bg-slate-100 my-5 mb-10 rounded-md overflow-hidden">

      <div className="md:grid-cols-3 grid-cols-1 grid-flow-row hidden md:grid">
        <p className="text-center w-full bg-slate-300 py-1">
          Text Segment
        </p>
        <p className="text-center w-full bg-slate-300 py-1">
          Image Prompt
        </p>
        <p className="text-center w-full bg-slate-300 py-1">Image</p>
      </div>

      <div className="md:grid-cols-3 grid-cols-1 grid-flow-row grid rounded-full">
        <div>
          <p className="text-center w-full bg-slate-300 py-1 md:hidden">
            Text Segment
          </p>
          <p className="p-4 text-[14px]">{chapterPrompt.text_segment} </p>
        </div>
        <div>
          <p className="text-center w-full bg-slate-300 py-1 md:hidden">
            Image Prompt
          </p>
          <p className="p-4 text-[14px]">{chapterPrompt.image_prompt} </p>
        </div>
        <div>
          <p className="text-center w-full bg-slate-300 py-1 md:hidden">Image</p>
          <div className="flex h-full items-center justify-center">
          <ModalImage src={"/image.svg"} alt={chapterPrompt.image_prompt} />
          </div>
        </div>
      </div>
    </div>
  );
};
