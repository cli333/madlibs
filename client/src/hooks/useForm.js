import { useState } from "react";
import axios from "axios";
import { isParagraphValid, isMaxCountValid } from "../utils/utils";

const useForm = (paragraph, maxCount) => {
  const [loading, setLoading] = useState(false);
  const [loadedTemplate, setLoadedTemplate] = useState(false);
  const [error, setError] = useState(null);
  const [madlibSubmitted, setMadlibSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (loading) return;

    // check if paragraph is valid
    if (!isParagraphValid(paragraph)) {
      setError("Please enter a valid paragraph of at least 200 characters");
      return;
    }
    // check if maxCount is valid
    if (!isMaxCountValid(maxCount, paragraph)) {
      setError("Please enter a valid count");
      return;
    }
    setLoading(true);
    // go to backend, retrieve form and set the template
    axios.post("/api/", { data: paragraph, maxCount }).then(async res => {
      await setLoadedTemplate(res.data.originalMadlib);
      await setLoading(false);
      document.getElementById("target").innerHTML = res.data.madlibForm;
    });
  };

  const handleTemplateSubmit = e => {
    e.preventDefault();
    // get all inputs
    let inputs = document.querySelectorAll("input[type='text']");
    let arrayOfInputs = Array.from(inputs).map(input => {
      return { index: Number(input.name), value: input.value };
    });
    for (let input of arrayOfInputs) {
      const { index, value } = input;
      loadedTemplate[index] =
        loadedTemplate[index] === value
          ? loadedTemplate[index]
          : `<strong>${value}</strong>`;
    }
    // set the target again
    // save to backend
    let joinedTemplate = loadedTemplate.join(" ");
    axios.post("/api/new", { data: joinedTemplate });
    document.getElementById("target").innerHTML = joinedTemplate;
    document.getElementById("target").classList.remove("hide");
    setMadlibSubmitted(true);
  };

  return {
    handleSubmit,
    loading,
    error,
    setError,
    loadedTemplate,
    setLoadedTemplate,
    handleTemplateSubmit,
    madlibSubmitted,
    setMadlibSubmitted
  };
};

export default useForm;
