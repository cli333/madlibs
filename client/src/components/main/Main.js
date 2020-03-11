import React, { useContext } from "react";
import "./Main.css";
import { ctx } from "../../context/Provider";
import MadlibItem from "../madlibItem/MadlibItem";

const Main = () => {
  const { madlib } = useContext(ctx);
  return (
    <div className="main">
      {madlib && <MadlibItem key={madlib._id} {...madlib} />}
    </div>
  );
};

export default Main;
