"use client";
import PokemonCard from "@/components/PokemonCard";
import { use, useEffect, useState } from "react";

type Pokemon = {
  name: string;
  url: string;
  id: number;
};

type PokemonData = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export default function Home() {
  const [data, setData] = useState<PokemonData | undefined>();
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const pokemonInfo = data?.results.map((pokemon) => pokemon.url); // returns the urls of all pokemon for more info

  // TODO: MOVE INTO OWN FUNCTION AND CALL SERVER SIDE
  async function fetchData() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151",
        { cache: "force-cache" }
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

  const getPokemonInformation = async () => {
    if (pokemonInfo) {
      try {
        const fetchedAdditionalData = await Promise.all(
          pokemonInfo.map(async (pokemonUrl) => {
            const res = await fetch(pokemonUrl);
            return res.json();
          })
        );
        setPokemonData(fetchedAdditionalData as any);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      getPokemonInformation();
    }
  }, [data]);

  console.log("pokemonData", pokemonData);

  return (
    <main className="flex gap-4 max-w-full flex-wrap">
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </main>
  );
}
