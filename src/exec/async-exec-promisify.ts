/**
 * Takes a function that has a callback as the last parameter,
 * and returns a new function that takes the same arguments as
 * the input function, but the callback.
 *
 * The returned function is async and is resolved when the
 * original callback is invoked.
 *
 * @param fn The function with callback
 */
function promisify (fn: Function) {
  return (...args: unknown[]): Promise<void> => {
    return new Promise((resolve) => {
      fn(...args, resolve)
    })
  }
}

export default promisify
