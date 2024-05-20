import SearchBar from "../SearchBar/SearchBar";

const Menu = ({ className }: { className: string }) => {
  return (
    <div className={`bg-gray-50 ${className}`}>
      <div className="container mx-auto p-4 flex justify-between">
        <nav>
          <ul className="flex gap-1">
            <li className="text-gray-800">
              <a href="/" className="p-4 inline-block hover:bg-gray-100">
                <span>Accueil</span>
              </a>
            </li>
            <li className="text-gray-800">
              <a
                href="/pokemons"
                className="p-4 inline-block hover:bg-gray-100"
              >
                <span>Pokemons</span>
              </a>
            </li>
            <li className="text-gray-800">
              <a
                href="/pokemons-types"
                className="p-4 inline-block hover:bg-gray-100"
              >
                <span>Types de pokemons</span>
              </a>
            </li>
          </ul>
        </nav>

        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
