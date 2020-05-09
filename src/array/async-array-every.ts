/**
 * Checks if all the items in the input array pass the test
 * implemented by the async callback function.
 *
 * The async callback function receives the following parameters:
 * - value: the current value in the array
 * - index: the current index
 * - array: the whole input array
 *
 * It should return a Promise resolved with:
 * - `true` if the item passes the test
 * - `false` if the item does not pass the test
 *
 * @param arr The input array
 * @param callback The async callback
 */
export default async function every<T> (arr: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<boolean> {
  for (let currentIndex = 0, length = arr.length; currentIndex < length; currentIndex++) {
    if (!(await callback(arr[currentIndex], currentIndex, arr))) return false
  }

  return true
}
