import { useState } from "react";
import { useCharacterContext } from "./../context/CharacterContext";
import { Character } from "./types";

interface CharacterProps {
  character: Character;
}

function CharacterComponent({ character }: CharacterProps) {
  const { addCharacter, removeCharacter, saveCharacter } =
    useCharacterContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState<string>(character.name);
  const different = editedName === character.name;

  const editCharacter = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    saveCharacter(character, editedName);
    setIsEditing(false);
  };

  return (
    <li
      key={character.id}
      className="flex items-center justify-between dark:text-white py-2 dark:bg-gray-700 px-4"
    >
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="p-2 border border-gray-300 rounded text-gray-700"
        />
      ) : (
        <span className="cursor-pointer" onClick={editCharacter}>
          {character.name}
        </span>
      )}
      <div>
        {isEditing ? (
          <button
            onClick={() => handleSave()}
            className={
              different
                ? "bg-gray-400 text-white px-2 rounded mr-2"
                : "bg-teal-500 text-white px-2 rounded mr-2"
            }
            disabled={different}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => addCharacter(character)}
            className="bg-green-500 text-white px-2 rounded mr-2"
          >
            Add
          </button>
        )}
        <button
          onClick={() => removeCharacter(character)}
          className="bg-red-500 text-white px-2 rounded"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CharacterComponent;
