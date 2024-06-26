import { useState } from "react";
import { useFakeNavigationContext } from "../FakeNavigationContext/FakeNavigationContext";

const SearchBar = () => {
  const { onChangePage } = useFakeNavigationContext();

  const [value, setValue] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // redirection
    onChangePage({
      newCurrentPage: "searchpokemon",
      newValueSearch: value,
    });

    // clear value
    setValue("");
  };

  return (
    <div className="flex items-center">
      <form
        method="GET"
        className="flex justify-start gap-2"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="border p-1"
          placeholder="Rechercher"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="submit"
          value="OK"
          className="font-bold text-gray-900 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SearchBar;
