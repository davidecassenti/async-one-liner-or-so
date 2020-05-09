/**
 * Resolves the array of promises
 *
 * @param array An array of Promises
 */
export default async function resolveFirst<T> (array: Promise<T>[]): Promise<T> {
  return Promise.race(array)
}
