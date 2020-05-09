import test from 'ava'

import reduce from '../../dist/array/async-array-reduce'

test('reduce', async (t) => {
  const arr1 = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await reduce(arr1, async (sum, n) => Promise.resolve(sum + n), 0),
    6
  )

  const arr2 = [
    'hello',
    'world'
  ]

  t.is(
    await reduce(arr2, async (sentence, word) => `${sentence}${word}`, ''),
    'helloworld'
  )
})
