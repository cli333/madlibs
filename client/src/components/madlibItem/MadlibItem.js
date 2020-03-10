import React, { useEffect } from "react";

const MadlibItem = ({ data, isLastItem, _id }) => {
  useEffect(() => {
    document.getElementById(`madlibitem-${_id}`).innerHTML = data;
  }, [_id, data]);

  return (
    <React.Fragment>
      <div id={`madlibitem-${_id}`}></div>
      {!isLastItem && <div className="ui divider"></div>}
    </React.Fragment>
  );
};

export default MadlibItem;
