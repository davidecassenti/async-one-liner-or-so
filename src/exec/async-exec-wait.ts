/**
 * Just waits for `time` ms.
 * Use await to stop the execution for that much time.
 *
 * @param time The time to wait
 *
 * @memberof module:exec
 */
export default async function wait (time = 0): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, time))
}
