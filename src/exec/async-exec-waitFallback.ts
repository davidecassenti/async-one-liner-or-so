import { resolveFirst } from '../array'
import timeout from './async-exec-timeout'

/**
 * Invokes for the provided async `callback`, and waits up to `time` before it finishes.
 * This function returns a Promise. The Promise is resolved with the output value of
 * the `callback`, if it returns in time, or with the value `fallback` otherwise.
 *
 * @see [src/exec/async-exec-waitFallback.ts](src/exec/async-exec-waitFallback.ts)
 *
 * @param callback {Function} The async callback to invoke
 * @param time {number} The time to wait
 * @param fallback {T} The fallback
 * @returns {Promise<T>} A Promise that is resolved with the return value of the callback, or the fallback
 *
 * @memberof module:exec
 */
export default async function waitFallback<T> (callback: Function, fallback: T, time: number): Promise<T> {
  return resolveFirst([
    callback(),
    timeout(() => fallback, time)
  ])
}
