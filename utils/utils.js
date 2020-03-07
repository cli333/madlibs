const pos = require("pos");

const lib = {
  UH: "interjection",
  JJ: "adjective",
  NN: "noun",
  NNS: "noun, plural",
  RB: "adverb",
  VB: "verb",
  VBD: "verb, past tense", // past tense
  VBZ: "verb, present"
};

// accepts a paragraph and number of words, default 5
// paragraph length is min of 300 characters

const libber = (paragraph, maxCount = 5) => {
  // split paragraph into an array of words
  const arrayOfWords = paragraph.split(" ");

  // indices of the inputs
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
    arrayOfWords[idx] = `<input type='text' placeholder='${type}'/>`;
  }

  console.log({ maxCount, inputsIndices });

  console.log(arrayOfWords.join(" "));
};

module.exports = { libber };
