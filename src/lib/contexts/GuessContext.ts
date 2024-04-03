import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { Pokemon } from "../data/dex";

export const GuessContext = createContext<[Pokemon[], Dispatch<SetStateAction<Pokemon[]>>]>([
  [],
  () => {
    return;
  },
]);

export const useGuessContext = () => useContext(GuessContext);
