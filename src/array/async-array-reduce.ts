import { callbackAsyncArrayReduce } from './index'

/**
 * Executes a reducer async function on each item of the array,
 * and returns a Promise resolved with a single output value.
 *
 * The reducer function receives the following parameters:
 *
 * - `accumulator`: the current reduced value
 * - `value`: the current array value being evaluated
 * - `index`: the current index being evaluated
 * - `array`: the whole input array
 *
 * The first time the reducer function is invoked, it receives
 * the `initialValue` as the `accumulator` argument. The second
 * time, it will receive the returned value of the first
 * invocation, and so on.
 *
 * @see [src/array/async-array-reduce.ts](src/array/async-array-reduce.ts)
 *
 * @param source {T[]} The input array
 * @param callback {module:array~callbackAsyncArrayReduce} The async callback
 * @param initialValue {U} The initial value
 * @returns {Promise<U>} A Promise resolved with the reduced value
 *
 * @memberof module:array
 */
export default async function reduce<T, U> (
  source: T[],
  callback: callbackAsyncArrayReduce<T, U>,
  initialValue: U
): Promise<U> {
  const resolvedArray = await Promise.all(source)
  return new Promise((resolve) => {
    resolve(
      resolvedArray.reduce(
        async (accumulator, value, index, array) => {
          const rPrev = await accumulator
          return Promise.resolve(await callback(rPrev, value, index, array))
        },
        Promise.resolve(initialValue)
      )
    )
  })
}
