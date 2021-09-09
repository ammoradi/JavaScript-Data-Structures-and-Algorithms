/**
 * Best Time Complexity: O(1)
 * Worst Time Complexity: O(n)
 * Average Time Complexity: O(n/2) => O(n)
 * Memory Complexity: O(1)
 * @param {array[T]} arr
 * @param {T} item
 */
export default function findByLinearSearch(arr, item) {
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}
