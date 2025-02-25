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
console.log(removeSpace("Hellow World"));

const removeSpaceFromStr = (str) => {
  return [...str].filter((char) => char != " ").join("");
};
console.log(removeSpaceFromStr("Vikas Madhur Shubham"));

//! 6.Remove characters from a string except alphabets
//! 7.Reverse a String
