/**
 * Returns the value of the first promise that is resolved in the array.
 *
 * @see [src/array/async-array-resolveFirst.ts](src/array/async-array-resolveFirst.ts)
 *
 * @param source An array of Promises
 *
 * @memberof module:array
 */
export default async function resolveFirst<T> (source: Promise<T>[]): Promise<T> {
  return Promise.race(source)
}
