import { createContext, ReactNode, useState } from "react";

type Props = {
  dispatch: boolean;
  setDispatch: (dispatch: boolean) => void;
};

interface DispatchContextProviderProps {
  children: ReactNode;
}

export const DispatchEventContext = createContext({} as Props);

export function DispatchProvider({ children }: DispatchContextProviderProps) {
  const [dispatch, setDispatch] = useState<boolean>(false);
  return (
    <DispatchEventContext.Provider value={{ dispatch, setDispatch }}>
      {children}
    </DispatchEventContext.Provider>
  );
}
