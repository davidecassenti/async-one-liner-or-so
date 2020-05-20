/**
 * Finds the first item in the tree that passes the test implemented
 * by the provided async callback function, and returns a Promise
 * resolved with the found value. The search is implemented breadth first.
 *
 * If no value is found, the returned Promise is resolved with `undefined`.
 *
 * The async callback function receives the following parameters:
 *
 * - `node`: the current node in the tree
 * - `tree`: the whole input tree
 *
 * It should return a Promise resolved with:
 *
 * - `true` if the item passes the test
 * - `false` if the item does not pass the test
 *
 * @see [src/tree/async-tree-findBreadthFirst.ts](src/tree/async-tree-findBreadthFirst.ts)
 *
 * @param {Function} callback The reducer function
 * @param callback {module:array~callbackAsyncArrayTest} The async callback
 * @param {Function} children A function to retrieve the children
 * @returns {Promise<T | undefined>} The node of the tree, or undefined
 *
 * @memberof module:tree
 */
export default async function findBreadthFirst<T> (
  tree: T,
  callback: (node: T, tree?: T) => Promise<boolean>,
  children: (node: T) => T[]
): Promise<T | undefined> {
  const visited: T[] = []
  const next = async (queue: T[]): Promise<T | undefined> => {
    const node = queue.shift() as T
    visited.push(node)

    if (await callback(node, tree)) return node

    for await (const child of children(node)) {
      if (!visited.includes(child)) queue.push(child)
    }

    return queue.length ? await next(queue) : undefined
  }
  return await next([tree])
}
