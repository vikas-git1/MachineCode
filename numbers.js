// Problems on Numbers

//! 1.Check if a number is palindrome or not.
const checkPalindrome = (num) => {
  let numStr = num.toString();
  let reverseStr = numStr.split("").reverse().join("");
  return reverseStr == numStr;
};
// console.log(checkPalindrome(10101));

//! 2.Find all Palindrome numbers in a given range.
const isPalindrome = (num) => {
  let str = num.toString();
  let reverseStr = str.split("").reverse().join("");
  return str == reverseStr;
};
const findPalindrome = (min, max) => {
  let palindromes = [];
  for (let i = min; i <= max; i++) {
    if (isPalindrome(i)) {
      palindromes.push(i);
    }
  }
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
const checkArmstrongNum = (num) => {
  let numStrArr = num.toString().split("");
  let length = numStrArr.length;
  let sum = 0;
  for (let el of numStrArr) {
    sum += parseInt(Math.pow(el, length));
  }
  return sum === num;
};
// console.log(checkArmstrongNum(371));

//! 6.Check if a number is perfect number.
const checkPerfectNum = (num) => {};
// console.log(checkPerfectNum(28));

//! 7.Even or Odd
const checkOddEven = (num) =>
  num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;
// console.log(checkOddEven(22));

//! 6.Check weather a given number is positive or negative.
const checkNumNature = (num) =>
  num > -1 ? `${num} is Positive` : `${num} is Nagetive`;
// console.log(checkNumNature(15));

//! 7.Sum of first N natural numbers.
const sumOfNaturalNums = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return `The sum first ${num} natural numbers is: ${sum}`;
};
// console.log(sumOfNaturalNums(10));

//! 8.Find Sum of AP Series.
const sumOfAPseries = (start, diff, n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += start;
    start += diff;
  }
  return sum;
};
// console.log(sumOfAPseries(2, 2, 4));

//! 9.Program to find sum of GP Series.
//     [a, first term r], [common ratio] [n, number of terms]
const sumOfGPseries = (a, r, n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += a;
    a *= r;
  }
  return sum;
};
// console.log(sumOfGPseries(1, 0.5, 3));

//! 10.Greatest of two numbers.
const findGreatestNum = (num1, num2) =>
  num1 > num2
    ? `${num1} is Greater than ${num2}`
    : `${num2} is greater than ${num1}`;

// console.log(findGreatestNum(22.001, 22));

//! 11.Greatest of three numbers.
const findGreatestNumOfThreeNums = (num1, num2, num3) => {
  let greaterNum = num1;
  if (num2 > greaterNum) {
    greaterNum = num2;
  }
  if (num3 > greaterNum) {
    greaterNum = num3;
  }
  return `The greatest of the three ${num1}, ${num2} and ${num3} is : ${greaterNum}`;
};

// console.log(findGreatestNumOfThreeNums(7, 119, 99));

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
