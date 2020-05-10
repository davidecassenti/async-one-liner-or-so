import reduce from './async-array-reduce'
import { callbackAsyncArrayTest } from './index'

/**
 * Gets an array and filters the items using an async filter function.
 *
 * The filter function is executed on each item and receives the following parameters:
 *
 * - `value`: the current value
 * - `index`: the current index
 * - `array`: the whole input array
 *
 * The async filter function should return a Promise resolved with:
 *
 * - `true` to keep the item
 * - `false` to get rid of the item
 *
 * @see [src/array/async-array-filter.ts](src/array/async-array-filter.ts)
 *
 * @param source {T[]} The input array
 * @param callback {module:array~callbackAsyncArrayTest} The async callback
 * @returns {Array<Promise<T>>} A Promise resolved with the filtered array
 *
 * @memberof module:array
 */
export default async function filter<T> (
  source: T[],
  callback: callbackAsyncArrayTest<T>
): Promise<T[]> {
  return reduce(
    source,
    async (previousValue, value, index, array): Promise<T[]> => {
      return (await callback(value, index, array) === true)
        ? [...previousValue, value]
        : previousValue
    },
    [] as T[]
  )
}
