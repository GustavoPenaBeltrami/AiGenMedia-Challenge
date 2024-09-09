import AudioPlayer from "./AudioPlayer";
import { Character, CharacterInventory } from "./CharacterInventory";
import { ContentItem } from "./CurrentContent";
import { Location, LocationInventory } from "./LocationInventory";
import { Shot, Shots } from "./Shots";
import Subplayer from "./SubPlayer";

export interface Scene {
  scene_summary: string;
  text_segment: string;
  characters: Character[];
  locations: Location[];
  shots: Shot[];
  audio: string;
  subtitles: string;
}

interface SceneProps {
  scene: Scene;
  content: ContentItem
  index: number;
}

export const Scene: React.FC<SceneProps> = ({ scene, index, content }) => {
  return (
    <div className="w-full">
      <h2 className="mb-2 text-2xl">Scene {index + 1} </h2>

      <p className="text-lg mb-2">{scene.scene_summary}</p>
      <p className="text-lg">{scene.text_segment}</p>

      <div className="w-full flex justify-evenly mt-8 mb-10">
        <Subplayer src={scene.subtitles} />
        <AudioPlayer src={scene.audio} />
      </div>

      {scene.characters.length > 0 && (
        <>
          <h3 className="mt-5 mb-4 font-semibold text-lg">
            Scene {index + 1}'s Characters'{" "}
          </h3>
          <CharacterInventory characters={scene.characters} />
        </>
      )}

      {scene.locations.length > 0 && (
        <>
          <h3 className="mt-5 mb-4 font-semibold text-lg">
            Scene {index + 1}'s Locations'{" "}
          </h3>
          <LocationInventory locations={scene.locations} />
        </>
      )}

      <h3 className="mt-5 mb-4 font-semibold text-lg">Shots</h3>
      {scene.shots.map((shot, index) => (
        <Shots key={index} shot={shot} index={index} />
      ))}
    </div>
  );
};
