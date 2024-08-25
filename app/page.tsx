"use client";
import PokemonCard from "@/components/PokemonCard";
import PokemonFilter from "@/components/PokemonFilter";
import { Type } from "@/components/PokemonType";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: Type[];
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
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

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
      const data: PokemonData = await response.json();

      const fetchedAdditionalData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemonData(fetchedAdditionalData as any);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const pokemonList = useMemo(() => {
    if (selectedType === "") {
      return pokemonData;
    } else {
      return pokemonData.filter(
        (pokemon: Pokemon) => pokemon?.types[0].type.name === selectedType
      );
    }
  }, [selectedType, pokemonData]);

  console.log("pokemonList", pokemonList);

  return (
    <main>
      <Image
        src="/pokedex-logo.svg"
        width={300}
        height={100}
        alt="Pokedex logo"
        className="mt-10"
      />
      <form className="my-6 border flex w-[85%] justify-between p-2 rounded-lg">
        <input
          className="w-[98%]"
          type="text"
          placeholder="Enter a pokemon name"
        />
        <button className="bg-amber-500 px-2 rounded-lg ml-8">Search</button>
      </form>
      <div className="mb-6">
        <PokemonFilter setSelectedType={setSelectedType} />
      </div>
      <div className="flex gap-4 max-w-full flex-wrap">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}
