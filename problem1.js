//Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.


function countSheep(num) {
    
  // base case
  if(num === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  // recursive case
  console.log(num, 'Another sheep jumps over the fence');
  return countSheep(num -1);

}

countSheep(3);