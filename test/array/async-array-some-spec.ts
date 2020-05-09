import test from 'ava'

import some from '../../dist/array/async-array-some'

test('some', async (t) => {
  const arr = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await some(arr, value => Promise.resolve(value > 0)),
    true
  )

  t.deepEqual(
    await some(arr, value => Promise.resolve(value < 0)),
    false
  )
})
