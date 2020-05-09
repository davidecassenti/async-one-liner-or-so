import test from 'ava'

import find from '../../dist/array/async-array-find'

test('find', async (t) => {
  const arr = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await find(arr, value => Promise.resolve(value === 2)),
    2
  )

  t.deepEqual(
    await find(arr, value => Promise.resolve(value === 4)),
    undefined
  )
})
