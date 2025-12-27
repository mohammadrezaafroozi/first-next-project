"use client";
import SearchInput from "./Search-input";
import PokemonList from "./PokemonList";
import { TPokemon } from "@/public/utils/types";
import { useState } from "react";

export default function PokemonWrapper({
  pokemons: initialPokemons,
}: {
  pokemons: TPokemon[];
}) {
  const [filteredPokemons, setFilteredPokemons] = useState(initialPokemons);
  const handleSearch = (search: string) => {
    const filtered = initialPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered)
  };
  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
}
