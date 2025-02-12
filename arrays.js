//! 1.Find the smallest number in an array.
const findSmallestNum = (arr) => {
  let smallestNum = arr[0];
  for (let el of arr) {
    if (smallestNum > el) {
      smallestNum = el;
    }
  }
  return smallestNum;
};
let arr1 = [123, 8, 90, 100, 20, 9];
// console.log(findSmallestNum(arr1));

//! 2.Find the largest number in an array.
function findLargestNum(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (largestNum < arr[i]) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}
let arr2 = [16, 90, -124, 1, 123, 78, 69];
// console.log(findLargestNum(arr2));

//! 3.Second Smallest and Second Largest element in an array.
const findSecondSmallestLargest = function (arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let secondLastIndex = sortedArr.length - 2;
  return {
    secondSmallest: sortedArr[1],
    secondLargest: sortedArr[secondLastIndex],
  };
};
let arr3 = [161, 910, -124, 1, 1273, 78, 1000, 69, 555];
// console.log(findSecondSmallestLargest(arr3));

//! 4.Reverse a given array
const reverseArray = (arr) => {
  let reversedArr = [];
  for (let el of arr) {
    reversedArr.unshift(el);
  }
  return reversedArr;
};
let arr4 = ["Golu", "Bhavishya", "Rajput", "Singh", "Vikas"];
// console.log(reverseArray(arr4));

//! 5.Count frequency of each element in an array
const countFrequency = (arr) => {
  let freq = {};
  for (let el of arr) {
    freq[el] = (freq[el] || 0) + 1;
  }
  return freq;
};
let arr5 = [10, 2, 61, 2, 17, 2, 10, -10, 17];
// console.log(countFrequency(arr5));

//! 6.Rearrange array in increasing-decreasing order.
const RearrangeArray = (arr) => {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let mid = Math.floor(sortedArr.length / 2);
  let increasingOrder = sortedArr.slice(0, mid);
  let decreasingOrder = sortedArr.slice(mid).reverse();
  return [...increasingOrder, ...decreasingOrder];
};
let arr6 = [15, 5, 25, 100, 400, 200];
// console.log(RearrangeArray(arr6));

//! 7.Calculate sum of the elements of the array
const calculateSumOfEl = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
let arr7 = [15, 90, 256, 902, 11, 0, -142];
// console.log(calculateSumOfEl(arr7));

//! 8.Rotate array by K elements
const rotateArrByK = (arr, k) => {
  let rotatedArr = [...arr];
  for (let i = 0; i < k; i++) {
    let shiftedEl = rotatedArr.shift();
    rotatedArr.push(shiftedEl);
  }
  return rotatedArr;
};
let arr8 = [5, 10, 15, 20, 25, 30, 35, 40];
// console.log(rotateArrByK(arr8, 3));

//! 9.Average of all elements in an array
const avgOfArray = (arr) =>
  arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
let arr9 = [-10, 2, 5, 10, 15, 20, 25, 30, 35, 40];
// console.log(avgOfArray(arr9));

//! 10.Find the median of the given array.
const findMedian = (arr) => {
  let sortedArr = [...arr].sort((a, b) => a - b);
  let mid = Math.floor(sortedArr.length / 2);
  return sortedArr.length % 2 != 0
    ? sortedArr[mid]
    : (sortedArr[mid] + sortedArr[mid - 1]) / 2;
};
let arr10 = [10, 115, -20, 100, 25, 130, 77, 10];
// console.log(findMedian(arr10));

//! 11.Remove duplicates from a sorted array
const removeDuplicates = (arr) => {
  let uniqueArr = [];
  let i = 0;
  for (let el of arr) {
    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    } else {
      i++;
    }
  }
  for (let j = 0; j < i; j++) {
    uniqueArr.push("_");
  }
  return uniqueArr;
};
let arr11 = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(arr11));

//! 12.Remove duplicates from unsorted array
const removeDuplicates2 = (arr) => {
  let uniqueArr = [];
  for (let el of arr) {
    if (!uniqueArr.includes(el)) {
      uniqueArr.push(el);
    }
  }
  return uniqueArr;
};
let arr12 = [9, 7, 7, 9, 2, 2, 2, 1, 8, 7];
// console.log(removeDuplicates2(arr12));

//! 13.Adding Element in an array
const addElAtBegining = (arr, el) => {
  let newArr = [...arr];
  newArr.unshift(el);
  return newArr;
};
let arr13 = [1, 2, 3, 4, 5, "Ram", "Shyam"];
// console.log(addElAtBegining(arr13, "Vikas"));
const addElAtBegining2 = (arr, el) => [el, ...arr];
// console.log(addElAtBegining2(arr13, "Madhur"));

const addElAtEnd = (arr, el) => {
  let newArr = arr;
  newArr.push(el);
  return newArr;
};
// console.log(addElAtEnd(arr13, 69));
const addElAtEnd2 = (arr, el) => [...arr, el];
// console.log(addElAtEnd2(arr13, "Shubham"));

const addElInArray = (arr, el, position) => {
  let newArr = [...arr];
  newArr.splice(position, 0, el);
  return newArr;
};
// console.log(addElInArray(arr13, "Muskan", 3));

//! 14.Find all repeating elements in an array.
const findRepetingELs = (arr) => {
 
};
let arr14 = [1, 12, 2, 67, "Golu", 2, 67, 90, "Golu"];
console.log(findRepetingELs(arr14));

//! 15.Find all non-repeating elements in an array
//! 16.Find all symmetric pairs in array
//! 17.Maximum product subarray in an array
//! 18.Replace each element of the array by its rank in the array
//! 19.Sorting elements of an array by frequency
//! 20.Rotation of elements of array- left and right
//! 21.Finding equilibrium index of an array
//! 22.Finding Circular rotation of an array by K positions
//! 23.Sort an array according to the order defined by another array
//! 24.Search an element in an array
//! 25.Check if Array is a subset of another array or not
