import findIndex from '../../dist/array/async-array-findIndex'

test('findIndex', async () => {
  const arr = [
    1,
    2,
    3
  ]

  expect(await findIndex(arr, value => Promise.resolve(value === 2)))
    .toBe(1)

  expect(await findIndex(arr, value => Promise.resolve(value === 4)))
    .toBe(-1)
})
