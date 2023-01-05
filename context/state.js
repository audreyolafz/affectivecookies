import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { CounterReducer, initialState } from "./reducer";

const CounterContext = createContext(0);

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  // const { state, dispatch } = useReducer(CounterReducer, initialState);
  // const contextValue = useMemo(() => {
  //   return { state, dispatch };
  // }, [state, dispatch]);

  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  return useContext(CounterContext);
}
