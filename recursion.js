/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  // given nums, an array of numbers
  // base case: empty array => return 1
  // otherwise: return first number * product(restOfArray)

  if (i === nums.length) return 1;
  
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  // given words, an array of strings that are words
  // base case: we arrived at an empty array, return 0
  // general case: we are at a word in the array. compare its length to the current max and proceed
  // with whichever is longer
  // return LENGTH of longest word

  if (i === words.length) return 0;

  return Math.max(words[i].length, longest(words, i + 1));

}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  // given a string
  // base case:
  // general case: we are at some point within the string. grab the char at that index and then skip the next.
  // call everyOther starting at the next char that should be included

  if (i >= str.length) return '';

  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  // given a string
  // need to check if string is palindrome, ie every pair of first and last char is ===
  // base case: we arrive at the same letter in the middle of the words OR our pointers cross (even-length words)
  // the base case occurs when i is greater than or equal to the floor of half the string's length
  // general case: we are at some "layer" of the string. check the first and last char. return if theyre the same
  // AND if its true for the next layer also

  if (i >= Math.floor(str.length / 2)) return true;

  return str[i] === str[str.length - 1 - i] && isPalindrome(str, i + 1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // given an array and a target string, return the index of the string within in the array or -1
  // base case: we have reached the end of the array and no val. return -1
  // general case: we are at a point of the array. check if the value at that point (index) is the
  // target string. if so, we can start returning the index. otherwise, call findIndex on the rest of the arr

  if (i === arr.length) return -1;

  return (arr[i] === val) ? i : findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  // VERY SIMILAR TO isPalindrome
  // given a string, return a copy of that string, reversed
  // base case: we arrive at the "middle" letter of the string (return that char)
  // OR our imaginary "pointers" cross (even-length words)
  // general case: we are at some "layer" of the string. swap the first and last char, concat'd with reversed restOfString

  if (i >= Math.floor(str.length / 2)) {
    switch (str.length % 2 === 0) {
      case true:
        return '';
      case false:
        return str[i];
    }
  }
  return str[str.length - 1 - i] + revString(str, i + 1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  // given an object of key-value pairs, where values may be nested objects,
  // return an array containing all values within the parent object that are strings
  // we want to recursively call gatherStrings on any nested objects we encounter
  // and have ALL calls of gatherStrings to have access to THE SAME array of strings
  // to push into if a new string is found, so we initialize empty array

  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') {
      gatherStrings(obj[key], arr);
    } else if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    }
  }
  return arr;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
