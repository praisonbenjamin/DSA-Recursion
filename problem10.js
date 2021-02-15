// anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

function createAnagram(word, prefix = '') {

  // base case
  if(word.length === 1){
    return word;
  }

  // recursive case
  let totalAnnagram = [];
  
  for (let i = 0; i < word.length; i++) {
    let subAnagram = [];
    //   remove everything before and after the selected character
    subAnagram = subAnagram.concat(createAnagram(word.substring(0, i) + word.substring(i + 1)));
    //  take the character and append everything after it
    subAnagram = subAnagram.map(anagram => word.charAt(i) + anagram);
    //  Add it to the total
    totalAnnagram = subAnagram.concat(totalAnnagram);
  }

  return totalAnnagram;
    
}

console.log(createAnagram('east'));