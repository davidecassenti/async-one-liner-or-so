import { callbackAsyncArrayTest } from './index'

/**
 * Checks if at least one item in the input array passes the
 * test implemented by the async callback function.
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
 * @see [src/array/async-array-some.ts](src/array/async-array-some.ts)
 *
 * @param source {T[]} The input array
 * @param callback {module:array~callbackAsyncArrayTest} The async callback
 * @returns {Promise<boolean>} A Promise resolved with the boolean result
 *
 * @memberof module:array
 */
export default async function some<T> (
  source: T[],
  callback: callbackAsyncArrayTest<T>
): Promise<boolean> {
  for (let currentIndex = 0, length = source.length; currentIndex < length; currentIndex++) {
    if (await callback(source[currentIndex], currentIndex, source)) return true
  }

  return false
}
