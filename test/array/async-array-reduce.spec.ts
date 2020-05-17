import reduce from '../../dist/array/async-array-reduce'

it('reduce', async () => {
  const arr1 = [
    1,
    2,
    3
  ]

  expect(await reduce(arr1, async (sum, n) => Promise.resolve(sum + n), 0))
    .toBe(6)

  const arr2 = [
    'hello',
    'world'
  ]

  expect(await reduce(arr2, async (sentence, word) => `${sentence}${word}`, ''))
    .toBe('helloworld')
})
