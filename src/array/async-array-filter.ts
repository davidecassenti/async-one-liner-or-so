import reduce from './async-array-reduce'

/**
 * Gets an array and filters the items using an async filter function.
 * The filter function is executed on each item and receives the following parameters:
 * - value: the current value
 * - index: the current index
 * - array: the whole input array
 *
 * The async filter function should return a Promise resolved with:
 * - `true` to keep the item
 * - `false` to get rid of the item
 *
 * @param arr The input array
 * @param callback The filter function
 */
export default async function filter<T> (arr: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<T[]> {
  return reduce(
    arr,
    async (previousValue, currentValue, currentIndex, array): Promise<T[]> => {
      return (await callback(currentValue, currentIndex, array) === true)
        ? [...previousValue, currentValue]
        : previousValue
    },
    [] as T[]
  )
}
