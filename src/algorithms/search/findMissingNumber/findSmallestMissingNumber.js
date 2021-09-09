/**
 * @description
 * Given a sorted array of n distinct integers
 * where each integer is in the range from 0 to m-1 and m > n.
 * Find the smallest number that is missing from the array.
 *
 * @see https://www.geeksforgeeks.org/find-the-first-missing-number/?ref=rp
 *
 * @param {array[number]} | arr
 * @param {number} | max
 */
export default function findSmallestMissingNumberInSortedArray(arr, max) {
  if (arr[0] !== 0) return 0;

  const arrayLength = arr.length;
  let start = 0;
  let end = arrayLength - 1;
  let mid;

  while (end >= start) {
    mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end + 1;
}
