/**
 * Functions to handle code execution.
 *
 * These functions allow to compose async functions,
 * calling `setTimeout` without callbacks (but with
 * the use of `await` instead) and so on.
 *
 * @module exec
 */

/**
 * An async function that is the result of the composition of others.
 *
 * @callback asyncComposedFunction
 *
 * @param initialValue {T} The accumulated value
 * @returns {Promise<unknown>} A Promise resolved with the result of the invocation of all the functions that composed this one
 */

import compose from './async-exec-compose'
import pipe from './async-exec-pipe'
import promisify from './async-exec-promisify'
import timeout from './async-exec-timeout'
import wait from './async-exec-wait'

export type asyncComposedFunction<T, U> = (arg: T) => Promise<U>

export {
  compose,
  pipe,
  promisify,
  timeout,
  wait,
}
