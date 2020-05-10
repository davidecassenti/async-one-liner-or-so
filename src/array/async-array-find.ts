import findIndex from './async-array-findIndex'

/**
 * Finds the first item in the array that passes the test implemented
 * by the provided async callback function, and returns a Promise
 * resolved with the found value.
 *
 * If no value is found, the returned Promise is resolved with `undefined`.
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
 * @param source The input array
 * @param callback The async callback
 *
 * @memberof module:array
 */
export default async function find<T> (source: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<T | undefined> {
  const foundIndex = await findIndex(source, callback)

  return foundIndex !== -1 ? source[foundIndex] : undefined
}
