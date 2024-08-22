import { backgroundConfig } from "@/utils/global-utils";
import React, { useState } from "react";
import { Pokemon } from "./PokemonCard";

type PokemonFilterProps = {
  filteredPokemon: (type: string) => void;
};

const PokemonFilter = ({ filteredPokemon }: PokemonFilterProps) => {
  const filterOptions = Object.keys(backgroundConfig);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("event.target.value", event.target.value);
    filteredPokemon(event.target.value);
  };

  return (
    <div>
      <label className="pr-4" htmlFor="pokemon-types">
        Filter by Type
      </label>
      <select name="pokemon-types" id="pokemon-types" onChange={handleChange}>
        <option value="">All</option>
        {filterOptions.map((filter) => (
          <option value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonFilter;
