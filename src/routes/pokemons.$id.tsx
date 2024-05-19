import { Await, createFileRoute, defer } from "@tanstack/react-router";
import DetailPokemon from "../templates/DetailPokemon/DetailPokemon";
import { fetchPokemonById } from "../data/fetchPokemonById";
import { Suspense } from "react";

export const Route = createFileRoute("/pokemons/$id")({
  parseParams: ({ id }) => ({ id: Number(id) }),
  loader: ({ params: { id } }) => {
    const pokemonPromise = fetchPokemonById(id);

    return {
      pokemonPromise: defer(pokemonPromise),
    };
  },
  component: PokemonDetailRoute,
  staleTime: Infinity,
  errorComponent: () => <p>bad param</p>,
});

function PokemonDetailRoute() {
  const { id } = Route.useParams();
  const { pokemonPromise } = Route.useLoaderData();

  return (
    <Suspense fallback={<p>loading with id {id} is loading</p>}>
      <Await promise={pokemonPromise}>
        {(data) => <DetailPokemon pokemon={data} />}
      </Await>
    </Suspense>
  );
}
