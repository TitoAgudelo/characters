import React from "react";
import { useCharacterContext } from "./../context/CharacterContext";
import CharacterItem from "./CharacterItem";
// import { Character } from "./types";

function CharacterDetail() {
  const { selectedCharacter } = useCharacterContext();

  return (
    <div className="character-detail col-span-1">
      <h2 className="text-lg font-bold mb-2 dark:text-white">
        Character Detail
      </h2>
      <div className="flex flex-col">
        {selectedCharacter &&
          selectedCharacter.map((character, index) => (
            <CharacterItem character={character} key={"character-" + index} />
          ))}
      </div>
    </div>
  );
}

export default CharacterDetail;
