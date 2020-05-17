import reduceRight from '../../dist/array/async-array-reduceRight'

it('reduceRight', async () => {
  const arr1 = [
    1,
    2,
    3
  ]

  expect(await reduceRight(arr1, async (sum, n) => Promise.resolve(sum + n), 0))
    .toBe(6)

  const arr2 = [
    'hello',
    'world'
  ]

  expect(await reduceRight(arr2, async (sentence, word) => `${sentence}${word}`, ''))
    .toBe('worldhello')
})
