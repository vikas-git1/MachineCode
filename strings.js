//! 1.Check if a given string is palindrome or not.
const isPalindrome = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrome("yoly"));

//! 2.Count number of vowels, consonants, spaces in String.
const countVowelsConsonantsSpaces = (str) => {
  let lowerCaseStr = str.toLowerCase();
  let vowels = "aeiou";
  let vowelsCount = 0,
    consonantsCount = 0;
  spacesCount = 0;
  for (let char of lowerCaseStr) {
    if (char == " ") spacesCount++;
    else if (vowels.includes(char)) vowelsCount++;
    else if (char >= "a" && char <= "z") consonantsCount++;
  }
  return {
    TotalVowels: vowelsCount,
    TotalConsonants: consonantsCount,
    TotalSpaces: spacesCount,
  };
};
// console.log(countVowelsConsonantsSpaces("My name is vikas"));

//! 3.Find the ASCII value of a character.
const valueOfASCIIchar = (char) => char.charCodeAt(0);
// console.log(valueOfASCIIchar("vikas"));

//! 4.Remove all vowels from the string.
const removeVowelsFromStr = (str) => str.replace(/[aeiouAEIOU]/g, "");
// console.log(removeVowelsFromStr("Hellow World"));

const removeVowels = (str) => {
  let vowels = "aeiouAEIOU";
  return [...str].filter((char) => !vowels.includes(char)).join("");
};
// console.log(removeVowels("My name is Golu"));

//! 5.Remove spaces from a string.
const removeSpace = (str) => str.replace(/\s/g, "");
// console.log(removeSpace("Hellow World"));

const removeSpaceFromStr = (str) => {
  return [...str].filter((char) => char != " ").join("");
};
// console.log(removeSpaceFromStr("Vikas Madhur Shubham"));

//! 6.Remove characters from a string except alphabets.
const removeCharsExceptAlphabets = (str) => str.replace(/[^A-Za-z]/g, "");
// console.log(removeCharsExceptAlphabets("12 *3V Mujhe Chhod 2"));

const removeCharsExceptAlphabets2 = (str) =>
  [...str].filter((char) => /[a-zA-Z]/.test(char)).join("");
// console.log(removeCharsExceptAlphabets2("hi1 37683ji &*vikas"));

//! 7.Reverse a String.
const reverseStr = (str) => str.split("").reverse().join("");
// console.log(reverseStr("vikas"));

//! 8.Remove brackets from an algebraic expression.
const removeBrackets = (str) => str.replace(/[()]/g, "");
// console.log(removeBrackets("vik(as) ji)"));

const removeBrackets2 = (str) =>
  [...str].filter((char) => !/[()]/.test(char)).join("");
// console.log(removeBrackets2("golu(Ram) ji)"));

//! 9.Sum of the numbers in a String.
const sumOfNumInStr = (str) => {
  let numArr = str.match(/\d+/g);
  let sum = 0;
  for (let el of numArr) {
    sum += parseInt(el);
  }
  return sum;
};
// console.log(sumOfNumInStr("vik12as78"));

//! 10.Capitalize first and last character of each word.
const capitalizeFirstAndLastChar = (str) => {
  let strArr = str.split(" ");
  let finalStr = strArr
    .map((word) =>
      word.length === 1
        ? word.toUpperCase()
        : word.at(0).toUpperCase() +
          word.slice(1, -1) +
          word.at(-1).toUpperCase()
    )
    .join(" ");
  return finalStr;
};
// console.log(capitalizeFirstAndLastChar("hellow this is vikas aa1"));

//! 11.Calculate frequency of characters in a string.
const calculateCharsFreq = (str) => {
  let freq = {};
};
//! 12.Find Non-repeating characters of a String.
const nonRepeatingChars = (str) => {};
// console.log(nonRepeatingChars("google"));

//! 13.Check if two strings are anagram of each other.
const isAnagramStr = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");
  return string1 === string2;
};
// console.log(isAnagramStr("act", "cat"));

//! 14.Count common sub-sequence in two strings.

//! 15.Check if two strings match where one string contains wildcard characters.

//! 16.Return maximum occurring character in the input string.
const maxOccuringChar = (str) => {};
// console.log(maxOccuringChar("vikaavs"));

//! 17.Remove all duplicates from the input string.
const removeDuplicates = (str) => {
  let charArr = [...new Set(str)];
  let charStr = charArr.join("");
  return charStr;
};
// console.log(removeDuplicates("Yahooo"));

//! 18.Print all the duplicates in the input string.

//! 20.Remove characters from first string present in the second string.
const removeChars = (str1, str2) => {
  let str = "";
  for (let char of str1) {
    if (!str2.includes(char)) {
      str += char;
    }
  }
  return str;
};
// console.log(removeChars("vikas", "as"));

const removeChars2 = (str1, str2) =>
  [...str1].filter((char) => !str2.includes(char)).join("");
// console.log(removeChars2("golu", "yahoo"));

//! 21.Change every letter with the next lexicographic alphabet in the given string.
const changeCharToNextChar = (str) => {
  let newStr = "";
  for (let char of str) {
    if (char === "z") {
      newStr += "a";
    } else if (char === "Z") {
      newStr += "A";
    } else {
      newStr += String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }
  return newStr;
};
// console.log(changeCharToNextChar("aawaz"));

//! 22.Write a program to find the largest word in a given string.
const findLargestWord = (str) => {
  let strArr = str.split(" ");
  let largestWord = strArr[0];
  for (let word of strArr) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }
  return largestWord;
};
// console.log(findLargestWord("I am a pro developer"));

const findLargestWord2 = (str) =>
  str
    .split(" ")
    .reduce(
      (largest, word) => (largest.length > word.length ? largest : word),
      ""
    );
// console.log(findLargestWord("I am a pro gamer"));

//! 23Write a program to sort characters in a string.
const sortChars = (str) => str.split("").sort().join("");
// console.log(sortChars("vikaAs"));
// console.log(sortChars("9036g"));

//! 24.Count number of words in a given string.
const countWords = (str) => str.split(" ").length;
// console.log(countWords("my name    is vikas"));

const countWords2 = (str) => str.trim().split(/\s+/).length;
// console.log(countWords2("my name     is vikas"));

//! 25.Write a program to find a word in a given string which has the highest number of repeated letters.

//! 26.Change case of each character in a string.
const changeCaseOfChars = (str) => {
  let result = "";
  for (let char of str) {
    char === char.toUpperCase()
      ? (result += char.toLowerCase())
      : (result += char.toUpperCase());
  }
  return result;
};
// console.log(changeCaseOfChars("abcXYZ"));

const changeCaseOfChars2 = (str) => {
  let newStr = "";
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }
  return newStr;
};
// console.log(changeCaseOfChars2("VikAs"));

//! 27.Concatenate one string to another.
const concatenateStrings = (str1, str2) => str1.trim() + str2.trim();
const concatenateStrings2 = (str1, str2) => str1.concat(str2);
const concatenateStrings3 = (str1, str2) => str1 + str2;
// console.log(concatenateStrings3("vikas", "golu"));

//! 28.Write a program to find a substring within a string. If found display its starting position.
//! 29.Reverse words in a string.
const reverseWordsInStr = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWordsInStr("my name is golu"));
