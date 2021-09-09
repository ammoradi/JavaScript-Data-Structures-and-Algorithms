/**
 * Time Complexity: O(n)
 * Memory Complexity: O(1)
 *
 * There are no duplicates in the list.
 * Works just for one gap
 * @param {array[number]} arr | list of n-1 integers in the range of 1 to n.
 */
export default function findMissingNumber(arr) {
  const arrayLength = arr.length;
  let sum = 1;

  for (let i = 1; i <= arrayLength; i++) {
    sum += i + 1; // calculate n(n+1)/2
    sum -= arr[i - 1]; // find missing item
  }

  return sum;
}
