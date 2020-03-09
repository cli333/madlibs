import React, { useEffect } from "react";

const MadlibItem = ({ data, isLastItem, specialKey }) => {
  useEffect(() => {
    document.getElementById(`madlibitem-${specialKey}`).innerHTML = data;
  }, []);

  return (
    <React.Fragment>
      <div id={`madlibitem-${specialKey}`}></div>
      {!isLastItem && <div className="ui divider"></div>}
    </React.Fragment>
  );
};

export default MadlibItem;
