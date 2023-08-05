function countVowels(sentence) {
  const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let vowelCount = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value) {
    if (vowel.includes(value)) {
      vowelCount += 1;
    }
  });
  console.log(vowelCount);
}

let sentence = "lorem ipsum lorem ipsum lorem ipsum ";

countVowels(sentence);
