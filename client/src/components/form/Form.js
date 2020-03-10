import React, { useState } from "react";
import "./Form.css";
import { placeholder } from "../../utils/utils";
import useForm from "../../hooks/useForm";

const Form = () => {
  const [paragraph, setParagraph] = useState("");
  const [count, setCount] = useState(1);

  const {
    handleSubmit,
    loading,
    loadedTemplate,
    setLoadedTemplate,
    error,
    setError,
    handleTemplateSubmit,
    madlibSubmitted,
    setMadlibSubmitted
  } = useForm(paragraph, count);

  const handleChange = (e, type) => {
    if (error) setError(null);
    if (type === "paragraph") {
      setParagraph(e.target.value);
    }
    if (type === "count") {
      setCount(e.target.value);
    }
  };

  const handleReset = () => {
    setError(null);
    setParagraph("");
    setCount(1);
    setLoadedTemplate(null);
    setMadlibSubmitted(false);
    document.getElementById("target").classList.add("hide");
  };

  return (
    <React.Fragment>
      {!loadedTemplate && (
        <div
          className={`ui form raised very padded text container segment ${
            loading ? "loading" : ""
          }`}
        >
          <div className="field">
            <label>
              <h2 className="ui header">Paragraph</h2>
            </label>

            <textarea
              value={paragraph}
              onChange={e => handleChange(e, "paragraph")}
              placeholder={placeholder}
            ></textarea>
            {error && error.includes("paragraph") && (
              <div className="ui pointing red basic label">{error}</div>
            )}
          </div>
          <div className="field">
            <h2 className="ui header">Max Count</h2>
            <input
              type="number"
              value={count}
              onChange={e => handleChange(e, "count")}
              min="1"
            />
            {error && error.includes("count") && (
              <div className="ui pointing red basic label">{error}</div>
            )}
          </div>
          <div className="ui buttons">
            <button className="ui green button" onClick={e => handleSubmit(e)}>
              Submit
            </button>
            <button className="ui red button" onClick={() => handleReset()}>
              Reset
            </button>
          </div>
        </div>
      )}

      <div
        className="ui raised very padded text container segment"
        style={{
          display: !loadedTemplate ? "none" : ""
        }}
      >
        <h2 className="ui header">Your MadLib!</h2>
        <p id="target" className="template hide"></p>
        <div className="ui buttons">
          <button
            disabled={madlibSubmitted}
            className="ui violet button"
            onClick={e => handleTemplateSubmit(e)}
          >
            Submit
          </button>
          <button className="ui red button" onClick={() => handleReset()}>
            Go Back
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
