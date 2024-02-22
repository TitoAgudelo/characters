import React from "react";
import { useCharacterContext } from "./../context/CharacterContext";
// import { Character } from "./types";

function CharacterDetail() {
  const { selectedCharacter } = useCharacterContext();

  return (
    <div className="character-detail col-span-1">
      <h2 className="text-lg font-bold mb-2">Character Detail</h2>
      <div className="flex flex-col">
        {selectedCharacter &&
          selectedCharacter.map((character, index) => (
            <div
              className="flex flex-row bg-slate-800 rounded-xl p-4 relative pl-24 overflow-hidden mb-4"
              key={"character-" + index}
            >
              <span className="absolute right-4 top-4 bg-">X</span>
              {character.image ? (
                <img
                  className="rounded-full mr-2 absolute -left-3 -top-3"
                  src={character.image}
                  alt={"userphoto-" + index}
                  width="80"
                  height="80"
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
                  Culture: {character.house}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CharacterDetail;
