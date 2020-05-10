/**
 * Takes a function that has a callback as the last parameter,
 * and returns a new function that takes the same arguments as
 * the input function, but the callback.
 *
 * The returned function is async and is resolved when the
 * original callback is invoked.
 *
 * @see [src/array/async-exec-promisify.ts](src/array/async-exec-promisify.ts)
 *
 * @param func The function with callback
 *
 * @memberof module:exec
 */
function promisify (func: Function) {
  return (...args: unknown[]): Promise<void> => {
    return new Promise((resolve) => {
      func(...args, resolve)
    })
  }
}

export default promisify
