import reduceRight from '../array/async-array-reduceRight'
import { AsyncUnaryFunction } from '../_types'

/**
 * Returns a new function that will execute the async functions
 * provided as input for `compose`, in reverse order.
 *
 * The returned function receives one parameter in input; this
 * parameter is the only argument of the last function; the output
 * of the last function will be the argument of the second last, and so on.
 *
 * @see [src/array/async-exec-compose.ts](src/array/async-exec-compose.ts)
 *
 * @param ...functions The functions to execute
 *
 * @memberof module:exec
 */
export default function compose<T> (...functions: AsyncUnaryFunction<T, unknown>[]) {
  return (initialValue: T): Promise<unknown> => reduceRight<Function, unknown>(
    functions,
    async (promiseValue, currentFunction) => currentFunction(await promiseValue),
    initialValue
  )
}
