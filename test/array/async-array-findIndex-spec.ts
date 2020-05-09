import test from 'ava'

import findIndex from '../../dist/array/async-array-findIndex'

test('findIndex', async (t) => {
  const arr = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await findIndex(arr, value => Promise.resolve(value === 2)),
    1
  )

  t.deepEqual(
    await findIndex(arr, value => Promise.resolve(value === 4)),
    -1
  )
})
