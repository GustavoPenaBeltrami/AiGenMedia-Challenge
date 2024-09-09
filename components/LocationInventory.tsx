export interface Location {
  name: string;
  description: string;
  real_word_equivalent?: string;
  physical_appearance?: string;
  cultural_background?: string;
  era?: string;
  background_info?: string;
  notable_traits?: string;
}

interface Locations {
    locations: Location[];
}

export const LocationInventory: React.FC<Locations> = ({locations}) => {
  return (
    <div className="flex flex-wrap w-full justify-center gap-x-5">
      {locations.map((location, index) => {
        return (
          <div key={index} className="mb-5 bg-slate-200 p-4 rounded-md max-w-[400px]">
            <h3 className="flex gap-x-2 mb-2 text-lg font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144m0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64"/></svg>{location.name}</h3>
            <ul className="list-disc list-inside">
              {location.description && <li>Celebrity: {location.description}</li>}
              {location.real_word_equivalent && <li>Real World Equivalent: {location.real_word_equivalent}</li>}
              {location.physical_appearance && <li>Physical Appearance: {location.physical_appearance}</li>}
              {location.cultural_background && <li>Cultural Background: {location.cultural_background}</li>}
              {location.era && <li>Era: {location.era}</li>}
              {location.background_info && <li>Background Info: {location.background_info}</li>}
              {location.notable_traits && <li>Notable Traits: {location.notable_traits}</li>}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
