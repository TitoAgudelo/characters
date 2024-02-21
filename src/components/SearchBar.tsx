import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCharacterContext } from "./../context/CharacterContext";
import { Character } from "./types";

function SearchBar() {
  const { setCharacters } = useCharacterContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        setAllCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    fetchCharacters();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredCharacters = allCharacters.filter((character: Character) =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setCharacters(filteredCharacters);
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Search for characters by name"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-l"
      />
    </div>
  );
}

export default SearchBar;
