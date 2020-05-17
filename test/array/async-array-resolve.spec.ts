import resolve from '../../dist/array/async-array-resolve'

it('resolve', async () => {
  const arr = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]

  expect(await resolve(arr))
    .toEqual([1, 2, 3])
})
