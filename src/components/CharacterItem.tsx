import { useState } from "react";
import { useCharacterContext } from "./../context/CharacterContext";
import { Character } from "./types";

type CharacterItem = {
  character: Character;
  key: string;
};

function CharacterItem({ character, key }: CharacterItem) {
  const { removeSelectedCharacter } = useCharacterContext();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="flex flex-row bg-white shadow-md dark:bg-slate-800 rounded-xl p-4 relative pl-24 overflow-hidden mb-4 transition-all duration-500"
      key={key}
    >
      <span
        className="absolute right-3 top-3 bg-rose-600 p-2 rounded-full w-6 h-6 cursor-pointer flex items-center justify-center text-xs font-bold"
        onClick={() => removeSelectedCharacter(character)}
      >
        X
      </span>
      {character.image ? (
        <img
          className="rounded-full mr-2 absolute -left-3 -top-3"
          src={character.image}
          alt={"userphoto-" + key}
          width="100"
          height="100"
        />
      ) : (
        <div className="flex justify-center items-center rounded-full mr-2 absolute -left-3 -top-3 bg-sky-600 w-[80px] h-[115px] p-10">
          <p className="text-wrap text-white">No Photo</p>
        </div>
      )}

      <div className="flex flex-col">
        <p className="text-slate-900 text-sm font-medium dark:text-slate-200">
          {character.name}
        </p>
        <p className="text-slate-500 text-sm font-medium dark:text-slate-400">
          Actor: {character.actor}
        </p>
        <p className="text-slate-500 text-sm font-medium dark:text-slate-400">
          House: {character.house}
        </p>
        {expanded ? (
          <>
            <p className="text-slate-500 text-sm font-medium dark:text-slate-400">
              Date Of Birth: {character.dateOfBirth}
            </p>
            <p className="text-slate-500 text-sm font-medium dark:text-slate-400">
              Patronus: {character.patronus}
            </p>
            <p className="text-slate-500 text-sm font-medium dark:text-slate-400">
              Ancestry: {character.ancestry}
            </p>
            <span
              className="cursor-pointer text-rose-600"
              onClick={() => setExpanded((previous) => !previous)}
            >
              Show Less
            </span>
          </>
        ) : (
          <span
            className="cursor-pointer text-sky-600"
            onClick={() => setExpanded((previous) => !previous)}
          >
            Show More
          </span>
        )}
      </div>
    </div>
  );
}

export default CharacterItem;
