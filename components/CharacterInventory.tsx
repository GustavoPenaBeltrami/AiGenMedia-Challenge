import { Character } from "./ContentItem";

interface Characters {
  characters: { [key: string]: Character };
}

export const CharacterInventory: React.FC<Characters> = ({ characters }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-5">
      {Object.keys(characters).map((key) => {
        const character = characters![key];
        return (
          <div key={key} className="mb-5 bg-slate-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold flex gap-x-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>{key}</h3>
            <ul className="list-disc list-inside">
              {character.celebrity && <li>Celebrity: {character.celebrity}</li>}
              {character.age && <li>Age: {character.age}</li>}
              {character.gender && <li>Gender: {character.gender}</li>}
              {character.hair && <li>Hair: {character.hair}</li>}
              {character.eyes && <li>Eyes: {character.eyes}</li>}
              {character.skin_tone && <li>Skin Tone: {character.skin_tone}</li>}
              {character.body_type && <li>Body Type: {character.body_type}</li>}
              {character.height && <li>Height: {character.height}</li>}
              {character.distinctive_features && (
                <li>Distinctive Features: {character.distinctive_features}</li>
              )}
              {character.clothing_style && (
                <li>Clothing Style: {character.clothing_style}</li>
              )}
              {character.facial_features && (
                <li>Facial Features: {character.facial_features}</li>
              )}
              {character.expression && (
                <li>Expression: {character.expression}</li>
              )}
              {character.posture && <li>Posture: {character.posture}</li>}
              {character.accessories && (
                <li>Accessories: {character.accessories}</li>
              )}
              {character.occupation_traits && (
                <li>Occupation Traits: {character.occupation_traits}</li>
              )}
              {character.era && <li>Era: {character.era}</li>}
              {character.background && (
                <li>Background: {character.background}</li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
