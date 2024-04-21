import { PokemonGeneration } from "../types";
import { fetchPokemonList } from "./fetchPokemonList";

export const fetchPokemonByValueSearch = async (
  valueSearch: string,
  generation?: PokemonGeneration
) => {
  const pokemons = await fetchPokemonList();

  let filteredPokemons = [...pokemons];

  filteredPokemons = filteredPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(valueSearch)
  );

  if (generation) {
    filteredPokemons = filteredPokemons.filter(
      (pokemon) => pokemon.apiGeneration === generation
    );
  }

  return filteredPokemons;
};
