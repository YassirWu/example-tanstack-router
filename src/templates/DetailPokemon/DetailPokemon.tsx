import { Link } from "@tanstack/react-router";
import { Pokemon } from "../../types";

type DetailPokemonProps = {
  pokemon: Pokemon;
};

const MAX_HP = 255;
const MAX_ATTACK = 181;
const MAX_DEFENSE = 230;
const MAX_SPECIAL_ATTACK = 173;
const MAX_SPECIAL_DEFENSE = 230;
const MAX_SPEED = 200;

const PokemonStats = ({
  name,
  value,
  maxValue,
}: {
  name: string;
  value: number;
  maxValue: number;
}) => {
  const valueAsPercentage = (value * 100) / maxValue;

  return (
    <div className="flex gap-4 items-center">
      <p className="font-black flex-1">{name}</p>
      <div className="h-4 bg-gray-100 rounded-md flex-1">
        <div
          className="h-full rounded-md bg-rose-700 relative"
          style={{
            width: `${valueAsPercentage > 25 ? valueAsPercentage : 25}%`,
          }}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

const DetailPokemon = ({ pokemon }: DetailPokemonProps) => {
  const { stats, apiPreEvolution, apiEvolutions } = pokemon;

  return (
    <div className="flex">
      <div className="w-1/5 border-r p-4">
        <div className="bg-gray-200 rounded-full p-4">
          <img src={pokemon.image} />
        </div>
      </div>
      <div className="w-4/5 p-4">
        <h1 className="text-3xl mb-4 font-bold">{pokemon.name}</h1>
        <ul className="flex gap-2 mb-8">
          {pokemon.apiTypes.map((apiType) => (
            <li key={apiType.name} className="">
              <span className="mr-1 align-middle">{apiType.name}</span>
              <img
                src={apiType.image}
                alt={apiType.name}
                className="w-8 inline-block align-middle"
              />
            </li>
          ))}
        </ul>

        <div className="mb-8">
          <h2 className="text-xl mb-4 uppercase font-semibold">Stats</h2>

          <div className="grid grid-cols-2 gap-4">
            <PokemonStats name="HP" value={stats.HP} maxValue={MAX_HP} />
            <PokemonStats
              name="Attack"
              value={stats.attack}
              maxValue={MAX_ATTACK}
            />
            <PokemonStats
              name="Defense"
              value={stats.defense}
              maxValue={MAX_DEFENSE}
            />
            <PokemonStats
              name="Special Attack"
              value={stats.special_attack}
              maxValue={MAX_SPECIAL_ATTACK}
            />
            <PokemonStats
              name="Special Defense"
              value={stats.special_defense}
              maxValue={MAX_SPECIAL_DEFENSE}
            />
            <PokemonStats
              name="Speed"
              value={stats.speed}
              maxValue={MAX_SPEED}
            />
          </div>
        </div>

        {apiPreEvolution !== "none" && (
          <div className="mb-8">
            <h2 className="text-xl mb-4 uppercase font-semibold">
              Précédentes évolutions
            </h2>

            <p className="pl-4">
              <Link
                to="/pokemons/$id"
                params={{ id: apiPreEvolution.pokedexIdd }}
              >
                {apiPreEvolution.name}
              </Link>
            </p>
          </div>
        )}

        {!!apiEvolutions.length && (
          <div>
            <h2 className="text-xl mb-4 uppercase font-semibold">
              Prochaines évolutions
            </h2>

            <ul className="flex flex-col gap-2 pl-4">
              {apiEvolutions.map((evolution) => (
                <li
                  key={evolution.pokedexId}
                  className={`${apiEvolutions.length > 1 ? "list-disc" : ""}`}
                >
                  <Link to="/pokemons/$id" params={{ id: evolution.pokedexId }}>
                    {evolution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPokemon;
