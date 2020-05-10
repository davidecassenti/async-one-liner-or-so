/**
 * Checks if all the items in the input array pass the test
 * implemented by the async `callback` function.
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
 * @see [src/array/async-array-every.ts](src/array/async-array-every.ts)
 *
 * @param source The input array
 * @param callback The async callback
 *
 * @memberof module:array
 */
export default async function every<T> (source: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<boolean> {
  for (let index = 0, length = source.length; index < length; index++) {
    if (!(await callback(source[index], index, source))) return false
  }

  return true
}
