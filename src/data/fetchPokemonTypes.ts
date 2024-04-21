import { PokemonType } from "../types";

export const fetchPokemonTypes = async () => {
  const res = await fetch("https://pokebuildapi.fr/api/v1/types");
  return res.json() as Promise<PokemonType[]>;
};
