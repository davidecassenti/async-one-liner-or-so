import every from '../../dist/array/async-array-every'

it('every', async () => {
  const arr = [
    1,
    2,
    3
  ]

  expect(await every(arr, value => Promise.resolve(value > 0)))
    .toBe(true)

  expect(await every(arr, value => Promise.resolve(value > 1)))
    .toBe(false)
})
