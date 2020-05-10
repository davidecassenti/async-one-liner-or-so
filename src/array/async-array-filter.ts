import reduce from './async-array-reduce'

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
 * @param source The input array
 * @param callback The async filter callback
 *
 * @memberof module:array
 */
export default async function filter<T> (source: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<T[]> {
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
