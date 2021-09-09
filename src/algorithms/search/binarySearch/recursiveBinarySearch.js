/**
 * just work on SORTED arrays
 * Best Time Complexity: O(1)
 * Worst Time Complexity: O(log(n))
 * Average Time Complexity: O(log(n)/2) => O(log(n))
 * Memory Complexity: O(log(n))
 * @param {array[T]} arr
 * @param {T} item
 * @param {number} startIndex
 * @param {number} endIndex
 */
export default function findByRecursiveBinarySearch(
  arr,
  item,
  startIndex,
  endIndex
) {
  if (startIndex > endIndex) return -1;

  const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  const guess = arr[midIndex];

  if (guess === item) return midIndex;

  if (guess > item) {
    return findByRecursiveBinarySearch(arr, item, startIndex, midIndex - 1);
  } else {
    return findByRecursiveBinarySearch(arr, item, midIndex + 1, endIndex);
  }
}
