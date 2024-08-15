"use client";

import { useState, useEffect } from "react";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonData = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export async function useFetchPokemon() {
  const [data, setData] = useState<PokemonData | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const pokemonData = await response.json();
        setData(pokemonData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
