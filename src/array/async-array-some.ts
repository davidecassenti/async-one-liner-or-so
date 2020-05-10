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
 * @param source The input array
 * @param callback The async callback
 *
 * @memberof module:array
 */
export default async function some<T> (source: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<boolean> {
  for (let currentIndex = 0, length = source.length; currentIndex < length; currentIndex++) {
    if (await callback(source[currentIndex], currentIndex, source)) return true
  }

  return false
}
