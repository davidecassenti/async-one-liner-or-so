import test from 'ava'

import reduceRight from '../../dist/array/async-array-reduceRight'

test('reduceRight', async (t) => {
  const arr1 = [
    1,
    2,
    3
  ]

  t.deepEqual(
    await reduceRight(arr1, async (sum, n) => Promise.resolve(sum + n), 0),
    6
  )

  const arr2 = [
    'hello',
    'world'
  ]

  t.is(
    await reduceRight(arr2, async (sentence, word) => `${sentence}${word}`, ''),
    'worldhello'
  )
})
