import { Pokemon } from "../../types";
import { useFakeNavigationContext } from "../FakeNavigationContext/FakeNavigationContext";

type PokemonCardProps = { pokemon: Pokemon };

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { onClickPokemon } = useFakeNavigationContext();

  return (
    <div className="card">
      <a
        href={`/pokemons/${pokemon.id}`}
        onClick={(e) => {
          e.preventDefault();
          onClickPokemon(pokemon.id);
        }}
      >
        <div className="border p-3 rounded-md shadow-md">
          <img alt={pokemon.name} src={pokemon.image} className="w-full mb-4" />
          <h3 className="text-xl font-semibold mb-4">{pokemon.name}</h3>
          <div className="flex justify-start gap-1">
            {pokemon.apiTypes.map((apiType) => (
              <>
                <span
                  key={apiType.name}
                  className="bg-gray-200 inline-block px-4 py-2 rounded-2xl"
                >
                  {apiType.name}
                </span>
              </>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default PokemonCard;
