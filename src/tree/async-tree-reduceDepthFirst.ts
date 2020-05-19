/**
 * Executes an async function on each element of a tree.
 * The tree is visited depth-first: starting from the root, the visit
 * goes as far as possible down the branches, before returning back
 * to the parent node.
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
 * @see [src/tree/async-tree-reduceDepthFirst.ts](src/tree/async-tree-reduceDepthFirst.ts)
 *
 * @param {Function} reducer The reducer function
 * @param {T} initialValue The initial value passed to the reducer
 * @param {Function} children A function to retrieve the children
 * @returns {Function} The function to visit the tree
 *
 * @memberof module:tree
 */
export default function reduceDepthFirst<T, U> (
  reducer: (accumulator: U, node: T, tree?: T) => Promise<U>,
  initialValue: U,
  children: (node: T) => T[]
) {
  return async (tree: T): Promise<U> => {
    const visited: T[] = []
    const next = async (accumulator: U, node: T): Promise<U> => {
      if (visited.includes(node)) return accumulator
      visited.push(node)

      let result = await reducer(accumulator, node, tree)

      for await (const child of children(node)) {
        result = await next(result, child)
      }

      return result
    }

    const finalResult = await next(initialValue, tree)
    return finalResult
  }
}
