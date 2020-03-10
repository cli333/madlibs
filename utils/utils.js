const pos = require("pos");

const lib = {
  UH: "interjection",
  JJ: "adjective",
  NN: "noun",
  NNS: "noun, plural",
  RB: "adverb",
  VB: "verb",
  VBD: "verb, past tense",
  VBZ: "verb, present"
};

const libber = (paragraph, maxCount = 5) => {
  const arrayOfWords = paragraph.split(" ");
  const copyOfArrayOfWords = arrayOfWords.slice("");
  const inputsIndices = [];

  while (inputsIndices.length < maxCount) {
    const randomIndex = Math.floor(Math.random() * arrayOfWords.length);
    const word = new pos.Lexer().lex(arrayOfWords[randomIndex]);
    const tagger = new pos.Tagger();
    const [taggedWord] = tagger.tag(word);
    const w = taggedWord[0];
    const t = taggedWord[1];
    if (lib[t] && randomIndex !== arrayOfWords.length - 1)
      inputsIndices.push({ word: w, type: lib[t], idx: randomIndex });
  }

  for (let index of inputsIndices) {
    const { type, idx } = index;
    arrayOfWords[
      idx
    ] = `<input name='${idx}' type='text' placeholder='${type}'/>`;
  }

  return {
    originalMadlib: copyOfArrayOfWords,
    madlibForm: arrayOfWords.join(" ")
  };
};

module.exports = { libber };
