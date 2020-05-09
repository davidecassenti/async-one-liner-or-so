import resolve from './async-array-resolve'

/**
 * Gets an array and executes an async callback on each item in the array.
 * The async callback receives the following parameters:
 * - value: the current value in the array
 * - index: the current index
 * - array: the whole input array
 *
 * @param arr The input array
 * @param callback The async callback
 */
export default async function map<T, U> (arr: T[], callback: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]> {
  return resolve(arr.map(async (value, index, array) => await callback(value, index, array)))
}
