import { useQuery } from "@tanstack/react-query";
import { fetchPokemonById } from "../../data/fetchPokemonById";
import DetailPokemon from "../DetailPokemon/DetailPokemon";

type DetailPokemonByIdProps = {
  id: number;
};

export const DetailPokemonById = ({ id }: DetailPokemonByIdProps) => {
  const { data: pokemon } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonById(id),
  });

  if (!pokemon) {
    return null;
  }

  return <DetailPokemon pokemon={pokemon} />;
};
