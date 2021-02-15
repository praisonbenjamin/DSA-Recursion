// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(input){

  // base case
  if(input === '') {
    return '';
  }

  // recursive case
  const firstChar = input[input.length -1];
  const restOfInput = input.slice(0, -1);
  return firstChar + reverseString(restOfInput);

}

console.log(reverseString('hello'));