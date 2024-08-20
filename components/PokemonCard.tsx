import { backgroundConfig, capitaliseFirstLetter } from "@/utils/global-utils";
import Image from "next/image";
import React from "react";
import PokemonType from "./PokemonType";

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
      <div className="p-4">
        <p className="text-slate-50 text-4xl pb-2 font-bold">{pokemonName}</p>
        <p className="text-slate-50 font-bold">#00{pokemon.id}</p>
        <div className="flex gap-2 pt-4">
          {pokemon.types.map((type) => (
            <PokemonType key={type.slot} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
