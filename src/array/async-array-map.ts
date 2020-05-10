import resolve from './async-array-resolve'

/**
 * Gets an array and executes an async callback on each item in the array.
 *
 * The async callback receives the following parameters:
 *
 * - `value`: the current value in the array
 * - `index`: the current index
 * - `array`: the whole input array
 *
 * @see [src/array/async-array-map.ts](src/array/async-array-map.ts)
 *
 * @param source The input array
 * @param callback The async callback
 *
 * @memberof module:array
 */
export default async function map<T, U> (source: T[], callback: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]> {
  return resolve(source.map(async (value, index, array) => await callback(value, index, array)))
}
