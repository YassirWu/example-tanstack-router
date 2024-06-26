import { useQuery } from "@tanstack/react-query";
import { fetchPokemonTypes } from "../../data/fetchPokemonTypes";
import { useFakeNavigationContext } from "../../components/FakeNavigationContext/FakeNavigationContext";

const ListPokemonTypesSkeleton = () => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
      <div className="h-32 bg-gray-200 rounded-md" />
    </ul>
  );
};

const ListPokemonTypes = () => {
  const { onClickType } = useFakeNavigationContext();
  const { data: pokemonTypes } = useQuery({
    queryKey: ["listpokemontypes"],
    queryFn: fetchPokemonTypes,
  });

  if (!pokemonTypes) {
    return <ListPokemonTypesSkeleton />;
  }

  return (
    <ul className="grid grid-cols-4 gap-4">
      {pokemonTypes.map((pokemonType) => (
        <div key={pokemonType.id}>
          <a
            href={`/pokemons-types/${pokemonType.name}/pokemons`}
            onClick={(e) => {
              e.preventDefault();
              onClickType(pokemonType.name);
            }}
          >
            <div className="border p-4 rounded-md shadow-md">
              <img
                alt={pokemonType.name}
                src={pokemonType.image}
                className="w-full mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                {pokemonType.name}
              </h3>
            </div>
          </a>
        </div>
      ))}
    </ul>
  );
};

export default ListPokemonTypes;
