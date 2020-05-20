/**
 * Executes an async function on each element of a tree.
 * The tree is visited breadth-first: starting from the root, each node
 * of the tree at at particular depth is visited, before moving to the
 * next level.
 *
 * For each node in the tree, the reducer function is executed with:
 *
 * - `accumulator`: the current reduced value (starts with `initialValue`)
 * - `node`: the current node
 * - `tree`: the whole tree
 *
 * The reducer returns the new value, that will be passed to the next.
 * The function returns the final reducer value.
 *
 * @see [src/tree/async-tree-reduceBreadthFirst.ts](src/tree/async-tree-reduceBreadthFirst.ts)
 *
 * @param {T} tree The tree
 * @param {Function} reducer The reducer function
 * @param {U} initialValue The initial value passed to the reducer
 * @param {Function} children A function to retrieve the children
 * @returns {Promise<U>} The reduced value
 *
 * @memberof module:tree
 */
export default async function reduceBreadthFirst<T, U> (
  tree: T,
  reducer: (accumulator: U, node: T, tree?: T) => Promise<U>,
  initialValue: U,
  children: (node: T) => T[]
): Promise<U> {
  const visited: T[] = []
  const next = async (queue: T[], accumulator: U): Promise<U> => {
    const node = queue.shift() as T

    if (visited.includes(node)) return accumulator
    visited.push(node)

    let result = await reducer(accumulator, node, tree)

    for await (const child of children(node)) queue.push(child)

    if (queue.length) result = await next(queue, result)

    return result
  }

  const finalResult = await next([tree], initialValue)
  return finalResult
}
