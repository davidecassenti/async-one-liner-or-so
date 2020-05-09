import test from 'ava'

import map from '../../dist/array/async-array-map'

test('map', async (t) => {
  const arr = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await map(arr, p => Promise.resolve(p * 2)),
    [2, 4, 6]
  )
})
