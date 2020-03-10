import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ctx = createContext();

const Provider = ({ children }) => {
  const [madlibs, setMadlibs] = useState([]);

  useEffect(() => {
    axios.get("/api/").then(res => setMadlibs(res.data));
  });

  return (
    <ctx.Provider
      value={{
        madlibs
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default Provider;
