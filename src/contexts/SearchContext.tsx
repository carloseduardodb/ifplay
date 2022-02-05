import { createContext, ReactNode, useState } from "react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as Props);

export function SearchProvider({ children }: SearchContextProviderProps) {
  const [search, setSearch] = useState<string>("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
