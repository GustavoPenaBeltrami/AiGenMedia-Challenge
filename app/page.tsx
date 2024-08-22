import fs from "fs";
import path from "path";
import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";
import Subplayer from "@/components/SubPlayer";
import {MetadataInfo} from "@/components/MetadataInfo";
import { ContentGrid } from "@/components/ContentGrid";
import { ChapterContent } from "@/components/ContentItem";

const getData = async (): Promise<TocData> => {
  const filePath = path.join(process.cwd(), "public", "toc.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
};

const fileExists = (filePath: string): boolean => {
  return fs.existsSync(filePath);
};


interface ContentItem {
  label: string;
  src: string;
  fragment?: string | null;
  chapter_contents: ChapterContent[];
}

interface Metadata {
  author: string;
  title: string;
  identifier: string;
  language: string;
  rights: string;
  publisher: string;
  cover: string;
}

interface TocData {
  metadata: Metadata;
  contents: ContentItem[];
}

export default async function Home() {
  const data = await getData();
  const {metadata, contents} = data;

  return (
    <div className="overflow-x-hidden max-w-[1200px] mx-auto">
    <MetadataInfo metadataInfo={metadata} />
    <ContentGrid contents={contents} />
    </div>
  );
}
