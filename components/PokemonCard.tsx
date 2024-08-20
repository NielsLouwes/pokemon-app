import { backgroundConfig, capitaliseFirstLetter } from "@/utils/global-utils";
import Image from "next/image";
import React from "react";

//type name number

export type Pokemon = {
  name: string;
  number: number;
  types: { slot: number; type: { name: string; url: string } }[];
  sprites: { front_default: string };
  id: number;
};

// TODO: Fix types mapping, not showing all types
// Add pokemon background color based on first type

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const pokemonName = capitaliseFirstLetter(pokemon.name);
  const pokemonMainType = pokemon.types[0].type.name;
  const coloredBackgroundColor =
    backgroundConfig[pokemonMainType as keyof typeof backgroundConfig];

  return (
    <div
      className={`${coloredBackgroundColor} border-solid border-2 flex flex-col rounded-lg p-2 w-40 lg:w-80`}
    >
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={400}
        height={400}
      />
      <p>{pokemonName}</p>
      <p>#00{pokemon.id}</p>
      {pokemon.types.map((type) => (
        <p key={type.slot}>{type.type.name}</p>
      ))}
    </div>
  );
};

export default PokemonCard;
