/**
 * Functions to handle arrays and async functions.
 *
 * Most of the functions here are similar to the standard
 * functions provided by the language, such as `Array.map`
 * or `Array.reduce`, but with async.
 *
 * @module array
 */

/* Types definitions */

/**
 * The callback invoked to test if each element in the input
 * array passes the test implemented. The callback returns a
 * `Promise` that resolves with a boolean:
 *
 * - `true` if the item passes the test
 * - `false` if the item does not pass the test
 *
 * @callback callbackAsyncArrayTest
 *
 * @param value {T} The current value being evaluated
 * @param index {number} The current index being evaluated
 * @param array {T[]} The whole input array
 * @returns {Promise<boolean>} A Promise resolved with the boolean result
 */

/**
 * The callback invoked to map the value of each element in the
 * input array into a new value.
 *
 * @callback callbackAsyncArrayMap
 *
 * @param value {T} The current value being evaluated
 * @param index {number} The current index being evaluated
 * @param array {T[]} The whole input array
 * @returns {Promise<U>} A Promise resovled with the mapped value
 */

/**
 * The callback invoked by the reducers. The function is executed
 * on each value of the input array, and receives in input the value
 * calculated in the previous execution (the `accumulator`).
 *
 * @callback callbackAsyncArrayReduce
 *
 * @param accumulator {U} The accumulated value
 * @param value {T} The current value being evaluated
 * @param index {number} The current index being evaluated
 * @param array {T[]} The whole input array
 * @returns {Promise<U>} A Promise resolved with the accumulated value
 */

import every from './async-array-every'
import filter from './async-array-filter'
import find from './async-array-find'
import findIndex from './async-array-findIndex'
import map from './async-array-map'
import reduce from './async-array-reduce'
import reduceRight from './async-array-reduceRight'
import resolve from './async-array-resolve'
import resolveFirst from './async-array-resolveFirst'
import some from './async-array-some'

export type callbackAsyncArrayTest<T> = (value: T, index: number, array: T[]) => Promise<boolean>

export type callbackAsyncArrayMap<T, U> = (value: T, index: number, array: T[]) => Promise<U>

export type callbackAsyncArrayReduce<T, U> = (accumulator: U, value: T, index: number, array: T[]) => Promise<U>

export {
  every,
  filter,
  find,
  findIndex,
  map,
  reduce,
  reduceRight,
  resolve,
  resolveFirst,
  some,
}
