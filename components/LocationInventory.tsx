import { Location } from "./ContentItem";

interface Locations {
    locations: { [key: string]: Location };
}

export const LocationInventory: React.FC<Locations> = ({locations}) => {
  return (
    <div className="grid md:grid-cols-3 gap-x-5">
      {Object.keys(locations).map((key) => {
        const character = locations![key];
        return (
          <div key={key} className="mb-5 bg-slate-100 p-4 rounded-md">
            <h3 className="flex gap-x-2 mb-2 text-lg font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"/></svg>{key}</h3>
            <ul className="list-disc list-inside">
              {character.real_word_place && <li>Celebrity: {character.real_word_place}</li>}
              {character.physical_appearance && <li>Age: {character.physical_appearance}</li>}
              {character.cultural_background && <li>Gender: {character.cultural_background}</li>}
              {character.era && <li>Hair: {character.era}</li>}
              {character.background && <li>Eyes: {character.background}</li>}
              {character.other_traits && <li>Skin Tone: {character.other_traits}</li>}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
