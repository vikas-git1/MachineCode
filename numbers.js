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

//! 12.Leap Year or not.
const isLeapYear = (year) =>
  year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
// console.log(isLeapYear(2023));

//! 13.Reverse digits of a number.
const reverseDigits = (num) =>
  parseInt(num.toString().split("").reverse().join(""));
// console.log(reverseDigits(298));

//! 14.Maximum and Minimum digit in a number
const findMaxMinOfDigit = (num) => {
  let arr = num.toString().split("");
  let numArr = arr.map((el) => parseInt(el));
  return {
    MaximumDigit: Math.max(...numArr),
    MinimumDigit: Math.min(...numArr),
  };
};
// console.log(findMaxMinOfDigit(924368));

//! 15.Print Fibonacci upto Nth Term
const printFibonacciSeries = (n) => {
  let series = [];
  if (n < 1) return series;
  if (n >= 1) series.push(0);
  if (n >= 2) series.push(1);
  for (let i = 2; i < n; i++) {
    let nextDigit = series[i - 1] + series[i - 2];
    series.push(nextDigit);
  }
  return series;
};
// console.log(printFibonacciSeries(9));

//! 16.Factorial of a number
const printFactorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return `The factorial of number ${num} is :${fact}`;
};
// console.log(printFactorial(4));

//! 17.Power of a number.
const powerOfNum = (num, pow) => num ** pow;
// console.log(powerOfNum(2, 5));

const powerOfNum1 = (num, pow) => Math.pow(num, pow);
// console.log(powerOfNum1(2, 5));

const powerOfNum2 = (num, pow) => {
  let power = 1;
  for (let i = 0; i < pow; i++) {
    power *= num;
  }
  return power;
};
// console.log(powerOfNum2(2, 5));

//! 18.Factors of a given number.
const findFactors = (num) => {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};
// console.log(findFactors(9));

//! 19.Print all prime factors of the given number.
const isPrimeNum = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getPrimeFactors = (num) => {
  let primeFactors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && isPrimeNum(i)) {
      primeFactors.push(i);
    }
  }
  return primeFactors;
};

// console.log(getPrimeFactors(50));

//! 20.Check if a number is a strong number or not.
const findFactorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

const isStrongNum = (num) => {
  let sum = 0;
  let arr = num.toString().split("");
  let numArr = arr.map((el) => parseInt(el));
  for (let el of numArr) {
    sum += findFactorial(el);
    console.log(sum);
  }
  return num == sum;
};
// console.log(isStrongNum(145));

//! 21.Check if a Number is Automorphic.
const checkAutomorphicNum = (num) => {
  let squareOfNum = num * num;
  return squareOfNum.toString().endsWith(num.toString());
};
// console.log(checkAutomorphicNum(25));

//! 22.GCD of two numbers
const findGCD = (num1, num2) => {
  while (num2 != 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
};
// console.log(findGCD(22, 55));

const findGCDofTwoNums = (num1, num2) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
// console.log(findGCDofTwoNums(35, 28));

//! 23.LCM of two numbers.
const printGCD = (a, b) => {
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const LCMofTwoNums = (num1, num2) => (num1 * num2) / printGCD(num1, num2);
// console.log(LCMofTwoNums(12, 15));

//! 24.Check if a number is Harshad number
const isHarshadNum = (num) => (num % 18 === 0 ? true : false);
// console.log(isHarshadNum(379));

//! 25.Check if the number is abundant number or not.
const isAbundandtNum = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
      console.log(sum);
    }
  }
  return sum > num;
};
// console.log(isAbundandtNum(19));

//! 26.Sum of digits of a number;
const sumOfDigitsOfNum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((sum, el) => sum + parseInt(el), 0);
};
// console.log(sumOfDigitsOfNum(567));

//! 27.Sum of numbers in the given range.
const sumOfNumInRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumOfNumInRange(12, 15));

//! 28.Permutations in which N people can occupy R seats in a classroom.
const factorialOf = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};
const findPermutation = (n, r) => factorialOf(n) / factorialOf(n - r);
// console.log(findPermutation(5, 3));

//! 29.Program to add two fractions.
const addFractions = (f1, f2) => {};
//! 30.Replace all 0s with 1s in a given integer.
const replaceZeroWithOne = (int) =>
  parseInt(int.toString().replaceAll("0", "1"));
// console.log(replaceZeroWithOne(134002));

//! 31.Can a number be expressed as a sum of two prime numbers.
const checkIsPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const sumOfTwoPrimeNums = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (checkIsPrime(i) && checkIsPrime(num - i)) {
      return true;
    }
  }
  return false;
};
// console.log(sumOfTwoPrimeNums(74));

//! 32.Calculate the area of circle.
const areaOfCircle = (radius) => 3.14 * radius ** 2;
// console.log(areaOfCircle(10));

//! 33.Program to find roots of a Quadratic Equation.

