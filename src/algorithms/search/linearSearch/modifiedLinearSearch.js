/**
 * Best Time Complexity: O(1)
 * Worst Time Complexity: O(n/2) => O(n)
 * Average Time Complexity: O(n/4) => O(n)
 * Memory Complexity: O(1)
 * @param {array[T]} arr
 * @param {T} item
 */
export default function findByModifiedLinearSearch(arr, item) {
  const arrayLength = arr.length;
  let left = 0;
  let right = arrayLength - 1;

  while (left <= right) {
    if (arr[left] === item) {
      return left;
    }

    if (arr[right] === item) {
      return right;
    }

    left++;
    right--;
  }

  return -1;
}
