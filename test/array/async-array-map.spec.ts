import map from '../../dist/array/async-array-map'

test('map', async () => {
  const arr = [
    1,
    2,
    3
  ]

  expect(await map(arr, p => Promise.resolve(p * 2)))
    .toEqual([2, 4, 6])
})
