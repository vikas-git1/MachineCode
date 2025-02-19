// Problems on Numbers

//! 1.Check if a number is palindrome or not.
const checkPalindrome = (num) => {};
// console.log(checkPalindrome(10));

//! 2.Find all Palindrome numbers in a given range.
const findPalindrome = (min, max) => {
  let palindromes = [];

  return palindromes;
};
// console.log(findPalindrome(10, 300));

//! 3.Check if a number is prime or not.
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime(-1));

//! 4.Prime numbers in a given range.
const checkPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const findPrimesInRange = (min, max) => {
  let primes = [];
  for (let i = min; i <= max; i++) {
    if (checkPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};
// console.log(findPrimesInRange(12, 78));

//! 5.Check if a number is armstrong number of not.
const checkArmstrongNum = (num) => {};
// console.log(checkArmstrongNum(371));

//! 6.Check if a number is perfect number.
const checkPerfectNum = (num) => {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return num === sum;
};
console.log(checkPerfectNum(28));

//! 7.Even or Odd
const checkOddEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
// console.log(checkOddEven(22));

//! 6.Check weather a given number is positive or negative
//! 7.Sum of first N natural numbers
//! 8.Find Sum of AP Series
//! 9.Program to find sum of GP Series
//! 10.Greatest of two numbers
//! 11.Greatest of three numbers
//! 12.Leap Year or not
//! 13.Reverse digits of a number
//! 14.Maximum and Minimum digit in a number
//! 15.Print Fibonacci upto Nth Term
//! 16.Factorial of a number
//! 17.Power of a number
//! 18.Factors of a given number
//! 19.Print all prime factors of the given number
//! 20.Check if a number is a strong number or not
//! 21.Check if a Number is Automorphic
//! 22.GCD of two numbers
//! 23.LCM of two numbers
//! 24.Check if a number is Harshad number
//! 25.Check if the number is abundant number or not
//! 26.Sum of digits of a number
//! 27.Sum of numbers in the given range
//! 28.Permutations in which N people can occupy R seats in a classroom
//! 29.Program to add two fractions
//! 30.Replace all 0s with 1s in a given integer
//! 31.Can a number be expressed as a sum of two prime numbers
//! 32.Calculate the area of circle
//! 33.Program to find roots of a Quadratic Equation
