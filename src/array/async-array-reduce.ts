/**
 * Executes a reducer async function on each item of the array,
 * and returns a Promise resolved with a single output value.
 *
 * The reducer function receives the following arguments:
 * - `accumulator`: the current reduced value
 * - `currentValue`: the current array value being evaluated
 * - `index`: the current index being evaluated
 * - `array`: the whole input array
 *
 * The first time the reducer function is invoked, it receives
 * the `initialValue` as the `accumulator` argument. The second
 * time, it will receive the returned value of the first
 * invocation, and so on.
 *
 * @param arr The input array
 * @param callback The reducer funciton
 * @param initialValue The initial value
 */
export default async function reduce<T, U> (arr: T[], callback: (prev: U, item: T, index: number, all: T[]) => Promise<U>, initialValue: U): Promise<U> {
  const resolvedArray = await Promise.all(arr)
  return new Promise((resolve) => {
    resolve(
      resolvedArray.reduce(
        async (previousValue, currentValue, currentIndex, array) => {
          const rPrev = await previousValue
          return Promise.resolve(await callback(rPrev, currentValue, currentIndex, array))
        },
        Promise.resolve(initialValue)
      )
    )
  })
}
