import reduce from '../array/async-array-reduce'
import { AsyncUnaryFunction } from '../_types'

/**
 * Returns a new function that will execute the async functions
 * provided as input for `pipe`, in order.
 *
 * The returned function receives one parameter in input; this
 * parameter is the only argument of the first function; the output
 * of the first function will be the argument of the second, and so on.
 *
 * @see [src/array/async-exec-pipe.ts](src/array/async-exec-pipe.ts)
 *
 * @param ...functions The functions to execute
 *
 * @memberof module:exec
 */
export default function pipe<T> (...functions: AsyncUnaryFunction<unknown, unknown>[]) {
  return (initialValue: T): Promise<unknown> => reduce<Function, unknown>(
    functions,
    async (promiseValue, currentFunction) => currentFunction(await promiseValue),
    initialValue
  )
}
