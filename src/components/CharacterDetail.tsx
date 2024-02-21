import React from "react";
import { useCharacterContext } from "./../context/CharacterContext";
// import { Character } from "./types";

function CharacterDetail() {
  const { selectedCharacter } = useCharacterContext();

  return (
    <div className="character-detail">
      <h2 className="text-lg font-bold mb-2">Character Detail</h2>
      {selectedCharacter && (
        <div>
          <h3 className="text-xl font-bold mb-2">{selectedCharacter.name}</h3>
          <p>Gender: {selectedCharacter.gender}</p>
          <p>Culture: {selectedCharacter.house}</p>
        </div>
      )}
    </div>
  );
}

export default CharacterDetail;
