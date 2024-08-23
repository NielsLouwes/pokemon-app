import { backgroundConfig } from "@/utils/global-utils";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Pokemon } from "./PokemonCard";

type PokemonFilterProps = {
  setSelectedType: Dispatch<SetStateAction<string>>;
};

const PokemonFilter = ({ setSelectedType }: PokemonFilterProps) => {
  const filterOptions = Object.keys(backgroundConfig);

  return (
    <div>
      <label className="pr-4" htmlFor="pokemon-types">
        Filter by Type
      </label>
      <select
        name="pokemon-types"
        id="pokemon-types"
        onChange={(event) => setSelectedType(event.target.value)}
      >
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
