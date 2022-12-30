import React, { createContext, useContext, useState, useEffect } from "react";

const CounterContext = createContext(0);

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(8);

  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  return useContext(CounterContext);
}
