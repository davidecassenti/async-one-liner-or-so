import find from '../../dist/array/async-array-find'

test('find', async () => {
  const arr = [
    1,
    2,
    3
  ]

  expect(await find(arr, value => Promise.resolve(value === 2)))
    .toBe(2)

  expect(await find(arr, value => Promise.resolve(value === 4)))
    .toBe(undefined)
})
