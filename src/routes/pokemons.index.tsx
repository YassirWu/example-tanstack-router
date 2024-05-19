import { createFileRoute } from "@tanstack/react-router";
import ListPokemons from "../templates/ListPokemons/ListPokemons";
import { fetchPokemonList } from "../data/fetchPokemonList";

export const Route = createFileRoute("/pokemons/")({
  loader: async () => {
    const pokemons = await fetchPokemonList(1);

    return { pokemons };
  },
  component: ListPokemonsRoute,
  staleTime: Infinity,
  pendingComponent: () => <p>loading pokemons...</p>,
});

function ListPokemonsRoute() {
  const { pokemons } = Route.useLoaderData();
  return <ListPokemons initialData={pokemons} />;
}
