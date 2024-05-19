import { createLazyFileRoute } from "@tanstack/react-router";
import ListPokemonsByType from "../templates/ListPokemonsByType/ListPokemonsByType";

export const Route = createLazyFileRoute("/pokemons-types/$type/pokemons")({
  component: PokemonsByTypeRoute,
});

function PokemonsByTypeRoute() {
  const { type } = Route.useParams();

  return <ListPokemonsByType pokemonType={type} />;
}
