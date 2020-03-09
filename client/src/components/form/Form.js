import React from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    // set form loading here

    <form className="ui form segment" onSubmit={e => handleSubmit(e)}>
      <div className="field">
        <label>Paragraph</label>
        <textarea></textarea>
      </div>
      <div className="field">
        {/* do some validation on the max count here */}
        <label>Max Count</label>
        <input type="number" />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
