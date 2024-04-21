import { createContext, useContext, useState } from "react";
import { Page } from "../../types";

type OnChangePageFunction = (options: {
  newCurrentPage: Page;
  newPokemonId?: number;
  newValueSearch?: string;
  newPokemonType?: string;
}) => void;
type OnClickPokemonFunction = (newPokemonId: number) => void;
type OnClickTypeFunction = (newPokemonType: string) => void;

type FakeNavigationContextValues = {
  onChangePage: OnChangePageFunction;
  onClickPokemon: OnClickPokemonFunction;
  onClickType: OnClickTypeFunction;
  currentPage: Page;
  pokemonType: string;
  selectedPokemonId: number | null;
  valueSearch: string;
};

const FakeNavigationContext = createContext<FakeNavigationContextValues>({
  onChangePage: () => {},
  onClickPokemon: () => {},
  onClickType: () => {},
  currentPage: "homepage",
  pokemonType: "",
  selectedPokemonId: null,
  valueSearch: "",
});

export const FakeNavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState<Page>("homepage");
  const [pokemonType, setPokemonType] = useState("");
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
    null
  );
  const [valueSearch, setValueSearch] = useState("");

  const onChangePage: OnChangePageFunction = ({
    newCurrentPage,
    newPokemonId,
    newValueSearch,
    newPokemonType,
  }) => {
    setCurrentPage(newCurrentPage);
    setSelectedPokemonId(newPokemonId ?? null);
    setValueSearch(newValueSearch ?? "");
    setPokemonType(newPokemonType ?? "");
  };

  const onClickPokemon: OnClickPokemonFunction = (newPokemonId) => {
    onChangePage({ newCurrentPage: "detailpokemon", newPokemonId });
  };

  const onClickType: OnClickTypeFunction = (newPokemonType) => {
    onChangePage({ newCurrentPage: "detailpokemon-type", newPokemonType });
  };

  return (
    <FakeNavigationContext.Provider
      value={{
        onChangePage,
        onClickPokemon,
        onClickType,
        currentPage,
        pokemonType,
        selectedPokemonId,
        valueSearch,
      }}
    >
      {children}
    </FakeNavigationContext.Provider>
  );
};

export const useFakeNavigationContext = () => {
  const context = useContext(FakeNavigationContext);
  return context;
};
