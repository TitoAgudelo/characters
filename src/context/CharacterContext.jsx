import { createContext, useContext, useState } from "react";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const addCharacter = (character) => {
    setCharacters((prevCharacters) => [...prevCharacters, character]);
  };

  const removeCharacter = (character) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((char) => char.url !== character.url)
    );
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        selectedCharacter,
        setSelectedCharacter,
        addCharacter,
        removeCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
