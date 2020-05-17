import filter from '../../dist/array/async-array-filter'

test('filter', async () => {
  const arr = [
    1,
    2,
    3
  ]

  expect(await filter(arr, async p => p > 1))
    .toEqual([2, 3])
})
