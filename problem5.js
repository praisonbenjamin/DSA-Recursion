// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

function stringSplitter(input, separator) {

  // base case
  if(!input.includes(separator)){
    return [input];
  }

  // recursive case
  let slice = input.slice(0, input.indexOf(separator));
  let rest = input.substring(input.indexOf(separator) + 1, input.length);

  return [slice, ...stringSplitter(rest, separator)];

}

console.log(stringSplitter('02/20/2020', '/'));