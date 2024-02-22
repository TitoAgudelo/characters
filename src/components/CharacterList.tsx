import { useCharacterContext } from "./../context/CharacterContext";
import { Character } from "./types";

function CharacterList() {
  const { characters, addCharacter, removeCharacter } = useCharacterContext();

  return (
    <div className="character-list col-span-2">
      <h2 className="text-lg font-bold mb-2">Characters</h2>
      <ul>
        {characters.map((character: Character) => (
          <li
            key={character.id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span>{character.name}</span>
            <div>
              <button
                onClick={() => addCharacter(character)}
                className="bg-green-500 text-white px-2 rounded mr-2"
              >
                Add
              </button>
              <button
                onClick={() => removeCharacter(character)}
                className="bg-red-500 text-white px-2 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
