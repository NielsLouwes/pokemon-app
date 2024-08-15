import { capitaliseFirstLetter } from "@/utils/globalutils";
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
  const pokemonName = capitaliseFirstLetter(pokemon);
  const pokemonMainType = pokemon.types[0].type.name;

  // 1. Grab main type from pokemon, create an object that matches this type to tailwind color classes, set that to the backgroundColor of the card

  const backgroundConfig = {
    grass: "bg-green-500",
    fire: "bg-red-400",
    water: "bg-blue-500",
    bug: "bg-orange-200",
    normal: "bg-red-100",
    poison: "bg-green-400",
    electric: "bg-yellow-300",
    ground: "bg-stone-400",
    fairy: "bg-emerald-200",
    fighting: "bg-teal-400",
    psychic: "bg-violet-600",
    rock: "bg-neutral-400",
    ghost: "bg-teal-100	",
    ice: "bg-cyan-200",
    dragon: "bg-yellow-700",
  };

  const backgroundColor = backgroundConfig[pokemonMainType];

  return (
    <div
      className={`mt-12 border-solid border-2  flex flex-col w-32 rounded-lg ${backgroundColor} p-2 w-40 lg:w-80`}
    >
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={400}
        height={400}
      />
      <p>{pokemonName}</p>
      <p># {pokemon.id}</p>
      <p>{pokemonMainType}</p>
      {pokemon.types.map((type) => (
        <p key={type.slot}>{type.name}</p>
      ))}
    </div>
  );
};

export default PokemonCard;
