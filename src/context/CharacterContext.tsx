import React, { createContext, useContext, useState } from "react";
import { Character } from "./../components/types";

interface CharacterContextProps {
  characters: Character[];
  selectedCharacter: Character[];
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
  setSelectedCharacter: React.Dispatch<React.SetStateAction<Character[]>>;
  addCharacter: (character: Character) => void;
  removeCharacter: (character: Character) => void;
  removeSelectedCharacter: (character: Character) => void;
  saveCharacter: (character: Character, name: string) => void;
}

interface Props {
  children: React.ReactNode;
}

const CharacterContext = createContext<CharacterContextProps>({
  characters: [],
  selectedCharacter: [],
  removeCharacter() {},
  addCharacter() {},
  setSelectedCharacter() {},
  setCharacters() {},
  removeSelectedCharacter() {},
  saveCharacter() {},
});

export const CharacterProvider: React.FC<Props> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character[]>([]);

  const addCharacter = (character: Character) => {
    setSelectedCharacter((prevCharacters) => [...prevCharacters, character]);
  };

  const removeCharacter = (character: Character) => {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((char) => char.id !== character.id)
    );
  };

  const removeSelectedCharacter = (character: Character) => {
    setSelectedCharacter((prevCharacters) =>
      prevCharacters.filter((char) => char.id !== character.id)
    );
  };

  const saveCharacter = (character: Character, name: string) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((item) =>
        item.id === character.id ? { ...item, name: name } : item
      )
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
        removeSelectedCharacter,
        saveCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider"
    );
  }
  return context;
};
