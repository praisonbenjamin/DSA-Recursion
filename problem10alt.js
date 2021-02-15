

function anagram(word, prefix = '') {
  if (word.length === 1){
    console.log(prefix + word);
  } else {
    for (let i = 0; i < word.length; i++) {
      let currentChar = word.substring(i, i + 1);
      let remaining = word.substring( i + 1);
      let previous = word.substring(0, i);
      anagram(remaining + previous, prefix + currentChar);
    }
  }
}

anagram('east');