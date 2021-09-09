/**
 * just work on SORTED arrays
 * Best Time Complexity: O(1)
 * Worst Time Complexity: O(log(n))
 * Average Time Complexity: O(log(n)/2) => O(log(n))
 * Memory Complexity: O(1)
 * @param {array[T]} arr
 * @param {T} item
 */
export default function findByIterativeBinarySearch(arr, item) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  let midIndex, guess;

  while (endIndex >= startIndex) {
    midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    guess = arr[midIndex];

    if (guess === item) return midIndex;

    if (guess > item) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
  }

  return -1;
}
