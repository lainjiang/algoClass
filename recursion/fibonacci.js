/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

// recursive solution w/o memoization
var nthFibonacci = function(n) {
  if (n <= 1) {
    return n;
  }
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

// console.log(nthFibonacci(50)); // finished in 193.9s

// recursive solution w memoization
var memo = [];
var test = 'test';
var nthFibonacci = function(n) {
  if (n <= 1) {
    return n;
  }
  if (!memo[n]) {
    memo[n] = nthFibonacci(n - 1) + nthFibonacci(n - 2);
  }
  return memo[n];
};

// console.log(nthFibonacci(50)); // finished in 0.1s