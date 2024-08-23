import { capitaliseFirstLetter, pokemonPillConfig } from "@/utils/global-utils";
import React from "react";

export type Type = {
  slot: number;
  type: { name: string; url: string };
};

type PokemonTypeProps = {
  type: Type;
};

const PokemonType = ({ type }: PokemonTypeProps) => {
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
