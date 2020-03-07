import pos from "pos";

export const lib = {
  UH: "interjection",
  JJ: "adjective",
  NN: "noun",
  NNS: "plural noun",
  RB: "adverb",
  VB: "verb",
  VBD: "verb, past tense", // past tense
  VBZ: "verb, present"
};

// accepts a paragraph and number of words, default 5
// paragraph length is min of 300 characters
// maxCount is the max number of word replacements
export const libber = (paragraph, maxCount = 5) => {
  // split paragraph into an array of words
  const arrayOfWords = paragraph.split(" ");
  // for some random indices
  const indices = [...Array(maxCount)].map(n =>
    Math.floor(Math.random() * arrayOfWords.length)
  );

  for (let i = 0; i < indices.length; i++) {
    const word = new pos.Lexer().lex(arrayOfWords[i]);
    const tagger = new pos.Tagger();
    const [taggedWord] = tagger.tag(word);
    const w = taggedWord[0];
    const t = taggedWord[1];
    // indices[i] = { word: w, type: t[lib], index: i };
    if (lib[t]) console.log({ w, t: lib[t], i }, arrayOfWords.join(" "));
  }
};
