import test from 'ava'

import filter from '../../dist/array/async-array-filter'

test('filter', async (t) => {
  const arr = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await filter(arr, async p => p > 1),
    [2, 3]
  )
})
