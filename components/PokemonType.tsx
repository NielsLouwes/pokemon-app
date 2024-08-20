import { capitaliseFirstLetter, pokemonPillConfig } from "@/utils/global-utils";
import React from "react";

type Type = {
  slot: number;
  type: { name: string; url: string };
};

const PokemonType = ({ type }: { type: Type }) => {
  const pokemonType = type.type.name;

  const pillBackgroundColor =
    pokemonPillConfig[pokemonType as keyof typeof pokemonPillConfig];

  return (
    <div className={`${pillBackgroundColor} rounded-2xl p-2`}>
      <p>{capitaliseFirstLetter(pokemonType)}</p>
    </div>
  );
};

export default PokemonType;
