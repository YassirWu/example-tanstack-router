import { Pokemon } from "../types";

export const fetchPokemonsByType = async (pokemonType: string) => {
  const res = await fetch(
    `https://pokebuildapi.fr/api/v1/pokemon/type/${pokemonType}`
  );
  return res.json() as Promise<Pokemon[]>;
};
