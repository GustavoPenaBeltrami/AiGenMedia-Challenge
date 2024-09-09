'use client'
import { Metadata } from "@/components/Metadata";
import { Contents } from "@/components/Contents";
import JsonSelector from "@/components/JsonSelector";
import { useEffect, useState } from "react";
import { ContentItem } from "@/components/CurrentContent";



interface Metadata {
  author: string;
  title: string;
  identifier: string;
  language: string;
  rights: string;
  publisher: string;
  cover: string;
  chapter_is_story: boolean
}

interface TocData {
  metadata: Metadata;
  contents: ContentItem[];
}

export default function Home() {
  const [jsonData, setJsonData] = useState<TocData | null>(null);
  const [animationKey, setAnimationKey] = useState<number>(0);

  useEffect(() => {
    if (jsonData) {
      // Reiniciar la animación actualizando la clave
      setAnimationKey(prevKey => prevKey + 1);
    }
  }, [jsonData]);

  return (
    <div className="overflow-x-hidden max-w-[1200px] mx-auto">
      <JsonSelector setJsonData={setJsonData} />

      {jsonData && (
        <div className={`start-animation animate`} key={animationKey}>
          <Metadata metadataInfo={jsonData.metadata} />
          <Contents contents={jsonData.contents} />
        </div>
      )}
    </div>
  );
}
