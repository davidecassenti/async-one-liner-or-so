/**
 * Finds the first item in the array that passes the test implemented
 * by the provided async callback function, and returns a Promise
 * resolved with the index of the found value.
 *
 * If no value is found, the returned Promise is resolved with `-1`.
 *
 * The async callback function receives the following parameters:
 *
 * - `value`: the current value in the array
 * - `index`: the current index
 * - `array`: the whole input array
 *
 * It should return a Promise resolved with:
 *
 * - `true` if the item passes the test
 * - `false` if the item does not pass the test
 *
 * @see [src/array/async-array-findIndex.ts](src/array/async-array-findIndex.ts)
 *
 * @param source The input array
 * @param callback The async callback
 *
 * @memberof module:array
 */
export default async function findIndex<T> (source: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<number> {
  for (let index = 0, length = source.length; index < length; index++) {
    if (await callback(source[index], index, source)) return index
  }

  return -1
}
