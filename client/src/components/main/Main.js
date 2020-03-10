import React, { useContext } from "react";
import "./Main.css";
import { ctx } from "../../context/Provider";
import MadlibItem from "../madlibItem/MadlibItem";

const Main = () => {
  const { madlibs } = useContext(ctx);
  return (
    <div>
      {madlibs.map((madlib, index, madlibs) => (
        <MadlibItem
          key={madlib._id}
          isLastItem={index === madlibs.length - 1}
          {...madlib}
        />
      ))}
    </div>
  );
};

export default Main;
