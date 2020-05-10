/**
 * Just waits for `time` ms.
 * Use await to stop the execution for that much time.
 *
 * @see [src/array/async-exec-wait.ts](src/array/async-exec-wait.ts)
 *
 * @param time {number} The time to wait
 * @returns {Promise<void>} A Promise that is resolved when the specified time expires
 *
 * @memberof module:exec
 */
export default async function wait (time = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, time))
}
