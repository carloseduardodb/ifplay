import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export const useSearch = () => {
  const value = useContext(SearchContext);
  return value;
};
