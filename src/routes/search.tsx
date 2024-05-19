import { createFileRoute } from "@tanstack/react-router";
import PokemonsSearch from "../templates/PokemonsSearch/PokemonsSearch";
import { z } from "zod";
import { PokemonGeneration } from "../types";

const validateSearchParams = z.object({
  value: z.string().catch(""),
  generation: z.nativeEnum(PokemonGeneration).optional(),
});

export const Route = createFileRoute("/search")({
  validateSearch: (search) => validateSearchParams.parse(search),
  component: SearchRoute,
});

function SearchRoute() {
  const { value, generation } = Route.useSearch();

  return (
    <PokemonsSearch valueSearch={value} defaultPokemonGeneration={generation} />
  );
}
