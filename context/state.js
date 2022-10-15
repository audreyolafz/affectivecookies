import React from "react";
import { useState, createContext, useContext } from "react";

// const UserContext = createContext();

// export function AppWrapper() {
//   const [search, setSearch] = useState("");
//   const handleInput = (event) => {
//     setSearch(event.target.value);
//   };

//   const logValue = () => {
//     console.log(search);
//   };
//   return (
//     <div>
//       <UserContext.Provider value={search}>
//         <ReqUser search={search} />
//         <input onChange={handleInput} placeholder="Enter name" />
//         <button onClick={logValue}>Log value</button>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export function ReqUser() {
//   return useContext(UserContext);
// }
