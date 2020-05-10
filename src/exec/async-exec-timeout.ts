/**
 * Execute the provided `callaback` after `time` ms.
 * Just as `setTimeout`, but async.
 *
 * @see [src/array/async-exec-timeout.ts](src/array/async-exec-timeout.ts)
 *
 * @param callback The callback to invoke
 * @param time The time to wait
 *
 * @memberof module:exec
 */
export default async function timeout<T> (callback: Function, time = 0): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), time)
  })
}
