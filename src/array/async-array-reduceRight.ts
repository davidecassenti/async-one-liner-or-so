import { callbackAsyncArrayReduce } from './index'

/**
 * Executes a reducer async function on each item of the array,
 * and returns a Promise resolved with a single output value.
 * The array is evaluated in reverse order (from the last item).
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
 * @see [src/array/async-array-reduceRight.ts](src/array/async-array-reduceRight.ts)
 *
 * @param source {T[]} The input array
 * @param callback {module:array~callbackAsyncArrayReduce} The async callback
 * @param initialValue {U} The initial value
 * @returns {Promise<U>} A Promise resolved with the reduced value
 *
 * @memberof module:array
 */
export default async function reduceRight<T, U> (
  source: T[],
  callback: callbackAsyncArrayReduce<T, U>,
  initialValue: U
): Promise<U> {
  const resolvedArray = await Promise.all(source)
  return new Promise((resolve) => {
    resolve(
      resolvedArray.reduceRight(
        async (previousValue, value, currentIndex, array) => {
          const rPrev = await previousValue
          return Promise.resolve(await callback(rPrev, value, currentIndex, array))
        },
        Promise.resolve(initialValue)
      )
    )
  })
}
