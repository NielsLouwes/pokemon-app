"use client";
import PokemonCard from "@/components/PokemonCard";
import PokemonFilter from "@/components/PokemonFilter";
import { useEffect, useState } from "react";

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
        "https://pokeapi.co/api/v2/pokemon?limit=60",
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

  const filteredPokemon = () => {
    const x = pokemonData.filter(
      (pokemon) => pokemon?.types[0].type.name === "grass"
    );
    console.log("x", x);

    return x;
  };

  filteredPokemon();

  return (
    <main>
      <form className="my-6 border flex w-[85%] justify-between p-2 rounded-lg">
        <input className="w-[98%]" type="text" placeholder="enter something" />
        <button className="bg-amber-500 px-2 rounded-lg ml-8">Search</button>
      </form>
      <div className="mb-6">
        <PokemonFilter />
      </div>
      <div className="flex gap-4 max-w-full flex-wrap">
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}
