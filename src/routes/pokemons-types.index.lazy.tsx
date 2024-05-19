import { createLazyFileRoute } from "@tanstack/react-router";
import ListPokemonTypes from "../templates/ListPokemonTypes/ListPokemonTypes";

export const Route = createLazyFileRoute("/pokemons-types/")({
  component: () => <ListPokemonTypes />,
});
