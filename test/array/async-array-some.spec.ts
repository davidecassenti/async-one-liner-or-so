import some from '../../dist/array/async-array-some'

it('some', async () => {
  const arr = [
    1,
    2,
    3
  ]

  expect(await some(arr, value => Promise.resolve(value > 0)))
    .toBe(true)

  expect(await some(arr, value => Promise.resolve(value < 0)))
    .toBe(false)
})
