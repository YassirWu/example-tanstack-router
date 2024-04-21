import { Pokemon, PokemonGeneration } from "../types";

export const fetchPokemonList = async (
  pokemonGeneration?: PokemonGeneration
) => {
  // all pokemons by default
  let url = "https://pokebuildapi.fr/api/v1/pokemon";

  if (pokemonGeneration) {
    url += `/generation/${pokemonGeneration}`;
  }

  const res = await fetch(url);
  return res.json() as Promise<Pokemon[]>;
};
