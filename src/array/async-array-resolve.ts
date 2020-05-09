/**
 * Resolves the array of promises
 *
 * @param arr An array of Promises
 * @return The resolved array
 */
export default async function resolve<T> (arr: Promise<T>[]): Promise<T[]> {
  return Promise.all(arr)
}
