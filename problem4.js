// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triangularNum(nth) {

  // base case
  if(nth === 1) {
    return 1;
  }

  // recursive case
  return nth + triangularNum(nth -1);
}

console.log(triangularNum(4));