import React, { useEffect, useContext, useState } from "react";
import "./MadlibItem.css";
import { ctx } from "../../context/Provider";

const MadlibItem = ({ data, _id }) => {
  const { fetchMadlib } = useContext(ctx);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.getElementById(`madlibitem-${_id}`).innerHTML = data;
  }, [_id, data]);

  const handleClick = () => {
    setLoading(true);
    fetchMadlib();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="ui raised segment madlibitem very padded container">
      <h2 className="ui madlibitem-header">
        <button
          className="ui circular icon button"
          onClick={() => handleClick()}
        >
          <i className={`redo icon ${loading && "rotate"}`}></i>
        </button>

        <span>Madlib</span>
      </h2>
      <div id={`madlibitem-${_id}`}></div>
    </div>
  );
};

export default MadlibItem;
