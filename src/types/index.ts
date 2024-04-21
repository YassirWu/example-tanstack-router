export enum PokemonGeneration {
  FirstGeneration = 1,
  SecondGeneration = 2,
  ThirdGeneration = 3,
  FourthGeneration = 4,
  FifthGeneration = 5,
  SixthGeneration = 6,
  SeveenthGeneration = 7,
  EighthGeneration = 8,
}

export type Pokemon = {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  apiTypes: {
    name: string;
    image: string;
  }[];
  apiGeneration: PokemonGeneration;
  apiResistances: {
    name: string;
    damage_multiplier: number;
    damage_relation: string;
  }[];
  resistanceModifyingAbilitiesForApi: {
    name: string;
    slug: string;
  };
  apiEvolutions: {
    name: string;
    pokedexId: number;
  }[];
  apiPreEvolution:
    | {
        name: string;
        pokedexIdd: number;
      }
    | "none";
  // apiResistancesWithAbilities: any[];
};

export type PokemonType = {
  id: number;
  name: string;
  image: string;
  englishName: string;
};

export type Page =
  | "homepage"
  | "listpokemon"
  | "listpokemon-type"
  | "detailpokemon"
  | "detailpokemon-type"
  | "searchpokemon";
