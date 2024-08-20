import { Pokemon } from "@/components/PokemonCard";

export type PokemonType =
  | "grass"
  | "fire"
  | "water"
  | "bug"
  | "normal"
  | "poison"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon";

export const capitaliseFirstLetter = (name: string) => {
  if (!name) return;

  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const backgroundConfig: Record<PokemonType, string> = {
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

export const pokemonPillConfig = {
  grass: "bg-green-200",
  fire: "bg-red-200",
  water: "bg-blue-200",
  bug: "bg-orange-100",
  normal: "bg-neutral-500",
  poison: "bg-green-700",
  electric: "bg-yellow-200",
  ground: "bg-stone-200",
  fairy: "bg-emerald-100",
  fighting: "bg-teal-200",
  psychic: "bg-violet-400",
  rock: "bg-neutral-200",
  ghost: "bg-teal-100	",
  ice: "bg-cyan-100",
  dragon: "bg-yellow-300",
  flying: "bg-blue-200",
};
