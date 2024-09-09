export interface ChapterContent {
  type: string;
  content: string;
  hash?: string;
}

interface ContentItemProps {
  chapterContent: ChapterContent;
  index: number;
}

export const ContentItem: React.FC<ContentItemProps> = ({
  chapterContent,
  index,
}) => {
  return (
    <div className="w-full">
      <h2 className="mb-2 text-2xl">Chapter {index + 1} </h2>
      <p className="text-md">{chapterContent.content}</p>
      {chapterContent.hash && (
        <span className="text-sm italic text-slate-400">
          hash: {chapterContent.hash}
        </span>
      )}
      <div className="w-full h-[1px] bg-slate-300 mt-5"></div>
    </div>
  );
};
