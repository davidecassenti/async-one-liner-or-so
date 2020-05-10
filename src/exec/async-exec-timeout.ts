/**
 * Execute the provided `callaback` after `time` ms.
 * Just as `setTimeout`, but async.
 *
 * @see [src/array/async-exec-timeout.ts](src/array/async-exec-timeout.ts)
 *
 * @param callback {Function} The callback to invoke
 * @param time {number} The time to wait
 * @returns {Promise<T>} A Promise that is resolved with the return value of the callback, after the time is expired
 *
 * @memberof module:exec
 */
export default async function timeout<T> (callback: Function, time = 0): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), time)
  })
}
