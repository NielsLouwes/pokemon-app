import { backgroundConfig } from "@/utils/global-utils";
import React from "react";

const PokemonFilter = () => {
  const filterOptions = Object.keys(backgroundConfig);

  return (
    <div>
      <label className="pr-4" htmlFor="pokemon-types">
        Types
      </label>
      <select name="pokemon-types" id="pokemon-types">
        <option value="">All</option>
        {filterOptions.map((filter) => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
    </div>
  );
};

export default PokemonFilter;
