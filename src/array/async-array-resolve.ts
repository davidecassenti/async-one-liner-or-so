/**
 * Resolves the array of promises
 *
 * @see [src/array/async-array-resolve.ts](src/array/async-array-resolve.ts)
 *
 * @param source {Array<Promise<T>>} An array of Promises
 * @returns {Promise<T[]>} A promise resolved with an array of the resolved promises
 *
 * @memberof module:array
 */
export default async function resolve<T> (
  source: Promise<T>[]
): Promise<T[]> {
  return Promise.all(source)
}
