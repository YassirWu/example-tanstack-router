import { Pokemon } from "../types";

export const fetchPokemonById = async (id: number) => {
  const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
  return res.json() as Promise<Pokemon>;
};
