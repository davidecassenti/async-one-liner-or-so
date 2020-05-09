import test from 'ava'

import resolve from '../../dist/array/async-array-resolve'

test('resolve', async (t) => {
  const arr = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]

  t.deepEqual(
    await resolve(arr),
    [1, 2, 3]
  )
})
