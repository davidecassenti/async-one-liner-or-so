/**
 * Resolves the array of promises
 *
 * @param source An array of Promises
 * @return The resolved array
 *
 * @memberof module:array
 */
export default async function resolve<T> (source: Promise<T>[]): Promise<T[]> {
  return Promise.all(source)
}
