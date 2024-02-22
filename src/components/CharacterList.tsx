import { useCharacterContext } from "./../context/CharacterContext";
import { Character } from "./types";
import CharacterComponent from "./Character";

function CharacterList() {
  const { characters, addCharacter, removeCharacter } = useCharacterContext();

  return (
    <div className="character-list col-span-2">
      <h2 className="text-lg font-bold mb-2 dark:text-white">Characters</h2>
      <ul>
        {characters.map((character: Character) => (
          <CharacterComponent key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
