import { useQuery } from "@tanstack/react-query";
import { fetchPokemonByValueSearch } from "../../data/fetchPokemonByValueSearch";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useState } from "react";
import { PokemonGeneration } from "../../types";
import { dropdownGenerationOptions } from "./PokemonsSearch.utils";
import { useNavigate } from "@tanstack/react-router";

const PokemonSearchSkeleton = () => {
  return (
    <ul className="grid grid-cols-3 gap-4">
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

type PokemonsSearchProps = {
  valueSearch: string;
  defaultPokemonGeneration?: PokemonGeneration;
};

const PokemonsSearch = ({
  valueSearch,
  defaultPokemonGeneration,
}: PokemonsSearchProps) => {
  const navigate = useNavigate();
  const [generation, setGeneration] = useState<PokemonGeneration | undefined>(
    defaultPokemonGeneration
  );
  const { data: pokemons } = useQuery({
    queryKey: ["pokemonsearch", valueSearch, generation],
    queryFn: () => fetchPokemonByValueSearch(valueSearch, generation),
  });

  if (!pokemons) {
    return <PokemonSearchSkeleton />;
  }

  const onChangePokemonGeneration = (
    newPokemonGeneration: PokemonGeneration | undefined
  ) => {
    setGeneration(newPokemonGeneration);
    navigate({
      to: "/search",
      search: { value: valueSearch, generation: newPokemonGeneration },
    });
  };

  return (
    <div>
      <h2 className="mb-4">
        Results for: <span className="font-bold">{valueSearch}</span>
      </h2>

      <select
        value={generation}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChangePokemonGeneration(!isNaN(value) ? value : undefined);
        }}
        className="cursor-pointer mb-4"
      >
        {dropdownGenerationOptions.map((option) => (
          <option value={option.value} key={option.title}>
            {option.title}
          </option>
        ))}
      </select>

      <ul className="grid grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonsSearch;
