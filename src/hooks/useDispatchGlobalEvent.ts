import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { DispatchEventContext } from "../contexts/DispatchEventContext";

export const useDispatchGlobalEvent = () => {
  const value = useContext(DispatchEventContext);
  return value;
};
