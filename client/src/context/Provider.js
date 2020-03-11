import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ctx = createContext();

const Provider = ({ children }) => {
  const [madlib, setMadlib] = useState(null);

  useEffect(() => {
    fetchMadlib();
  }, []);

  const fetchMadlib = () => {
    axios.get("/api/").then(res => setMadlib(res.data));
  };

  return (
    <ctx.Provider
      value={{
        madlib,
        fetchMadlib
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export default Provider;
