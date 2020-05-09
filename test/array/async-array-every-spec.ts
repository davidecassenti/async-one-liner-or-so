import test from 'ava'

import every from '../../dist/array/async-array-every'

test('every', async (t) => {
  const arr = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await every(arr, value => Promise.resolve(value > 0)),
    true
  )

  t.deepEqual(
    await every(arr, value => Promise.resolve(value > 1)),
    false
  )
})
