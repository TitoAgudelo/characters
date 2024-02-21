import SearchBar from "./SearchBar";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import { CharacterProvider } from "./../context/CharacterContext";

function CharacterManager() {
  return (
    <CharacterProvider>
      <SearchBar />
      <div className="character-manager">
        <CharacterList />
        <CharacterDetail />
      </div>
    </CharacterProvider>
  );
}

export default CharacterManager;
