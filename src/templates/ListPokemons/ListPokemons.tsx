import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../../data/fetchPokemonList";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { Pokemon } from "../../types";

const ListPokemonSkeleton = () => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
      <div className="h-64 bg-gray-200 rounded-md" />
    </ul>
  );
};

const ListPokemons = ({ initialData }: { initialData?: Pokemon[] }) => {
  const { data: pokemons } = useQuery({
    initialData,
    queryKey: ["listpokemon"],
    queryFn: () => fetchPokemonList(1),
  });

  if (!pokemons) {
    return <ListPokemonSkeleton />;
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3  gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </ul>
  );
};

export default ListPokemons;
