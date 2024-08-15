import { Pokemon } from "@/components/PokemonCard";

export const capitaliseFirstLetter = (pokemon: Pokemon) => {
  if (!pokemon) return;

  return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
};
