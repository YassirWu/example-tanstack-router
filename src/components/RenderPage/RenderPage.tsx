import DetailPokemon from "../../templates/DetailPokemon/DetailPokemon";
import Homepage from "../../templates/Homepage/Homepage";
import ListPokemonTypes from "../../templates/ListPokemonTypes/ListPokemonTypes";
import ListPokemons from "../../templates/ListPokemons/ListPokemons";
import ListPokemonsByType from "../../templates/ListPokemonsByType/ListPokemonsByType";
import PokemonsSearch from "../../templates/PokemonsSearch/PokemonsSearch";
import { useFakeNavigationContext } from "../FakeNavigationContext/FakeNavigationContext";

const RenderPage = () => {
  const { currentPage, selectedPokemonId, pokemonType, valueSearch } =
    useFakeNavigationContext();

  switch (currentPage) {
    case "homepage":
      return <Homepage />;
    case "listpokemon":
      return <ListPokemons />;
    case "listpokemon-type":
      return <ListPokemonTypes />;
    case "detailpokemon":
      return <DetailPokemon id={selectedPokemonId ?? 1} />;
    case "detailpokemon-type":
      return <ListPokemonsByType pokemonType={pokemonType} />;
    case "searchpokemon":
      return <PokemonsSearch valueSearch={valueSearch} />;

    default:
      break;
  }
};

export default RenderPage;
