import { useQuery } from "@tanstack/react-query";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { fetchPokemonsByType } from "../../data/fetchPokemonsByType";

const ListPokemonSkeleton = () => {
  return (
    <ul className="grid grid-cols-3 gap-4">
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

type ListPokemonsByTypeProps = { pokemonType: string };

const ListPokemonsByType = ({ pokemonType }: ListPokemonsByTypeProps) => {
  const { data: pokemons } = useQuery({
    queryKey: ["listpokemon-bytype", pokemonType],
    queryFn: () => fetchPokemonsByType(pokemonType),
  });

  if (!pokemons) {
    return <ListPokemonSkeleton />;
  }

  return (
    <ul className="grid grid-cols-3 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </ul>
  );
};

export default ListPokemonsByType;
