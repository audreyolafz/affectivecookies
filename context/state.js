import React, { createContext, useContext, useState, useEffect } from "react";

const CounterContext = createContext(0);

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   // Fetch data from the Airtable API and update the context data
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://api.airtable.com/v0/appE2tkAhTZtrBVKx/cookie_count",
  //       {
  //         headers: {
  //           Authorization: process.env.AIRTABLE_API_KEY,
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     setCounter(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  return useContext(CounterContext);
}
