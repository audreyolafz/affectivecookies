import React from "react";
import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export function AppWrapper({ children }) {
  const [search, setSearch] = useState("SMAHRTeam");
  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  const logValue = () => {
    console.log(search);
  };
  let sharedState = "SMAHRTeam";
  return (
    <div>
      <UserContext.Provider value={sharedState}>
        {children}
        {/* <ReqUser search={search} />
        <input onChange={handleInput} placeholder="Enter name" />
        <button onClick={logValue}>Log value</button> */}
      </UserContext.Provider>
    </div>
  );
}

// export function ReqUser() {
//   return useContext(UserContext);
// }
