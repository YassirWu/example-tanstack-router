import { PokemonGeneration } from "../../types";

export const dropdownGenerationOptions = [
  { title: "All generations", value: undefined },
  { title: "First generation", value: 1 },
  { title: "Second generation", value: 2 },
  { title: "Third generation", value: 3 },
  { title: "Fourth generation", value: 4 },
  { title: "Fifth generation", value: 5 },
  { title: "Sixth generation", value: 6 },
  { title: "Seventh generation", value: 7 },
  { title: "Eighth generation", value: 8 },
] satisfies { title: string; value: PokemonGeneration | undefined }[];
