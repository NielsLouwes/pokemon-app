import { capitaliseFirstLetter } from "@/utils/globalutils";
import Image from "next/image";
import React from "react";

//type name number

export type Pokemon = {
  name: string;
  number: number;
  types: { slot: number; type: { name: string; url: string } }[];
};

// TODO: Fix types mapping, not showing all types
// Add pokemon background color based on first type

const PokemonCard = ({ pokemon }: Pokemon) => {
  const pokemonName = capitaliseFirstLetter(pokemon);
  return (
    <div className="mt-12 border-solid border-2 border-indigo-600 flex flex-col w-32">
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={400}
        height={400}
      />
      <p>{pokemonName}</p>
      <p># {pokemon.id}</p>
      <p>{pokemon.types[0].type.name}</p>
      {pokemon.types.map((type) => (
        <p key={type.slot}>{type.name}</p>
      ))}
    </div>
  );
};

export default PokemonCard;
