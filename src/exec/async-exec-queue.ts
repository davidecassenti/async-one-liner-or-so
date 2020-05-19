/**
 * Executes a list of async functions in parallel, limiting the number
 * of concurrent running functions.
 *
 * @see [src/exec/async-exec-queue.ts](src/exec/async-exec-queue.ts)
 *
 * @param {number} limit The maximum number of functions to execute
 * @param {Function} ...functions The functions to execute
 * @returns {module:exec~asyncComposedFunction} The composed function
 *
 * @memberof module:exec
 */
export default async function queue<T> (
  limit: number,
  ...functions: (() => Promise<T>)[]
): Promise<T[]> {
  return new Promise((resolve) => {
    const queue = [...functions]
    const results: T[] = []
    let executing = 0

    const next = async (delta: number): Promise<void> => {
      executing += delta
      if (queue.length && executing <= limit) {
        const result = (queue.shift() as Function)()
        next(1)

        results.push(await result)

        if (results.length < functions.length) next(-1)
        else resolve(results)
      }
    }

    next(1)
  })
}
