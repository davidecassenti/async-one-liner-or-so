import compose from '../../dist/exec/async-exec-compose'

it('compose', async () => {
  const composedFn = compose(
    async (x: Record<string, string>) => Promise.resolve([x]),
    async (x: string) => Promise.resolve({ x }),
    async (x: number) => Promise.resolve(`${x}!`),
    async (x: boolean) => Promise.resolve(x && 2),
    async (x: number) => Promise.resolve(x + 1)
  )

  expect(await composedFn(1))
    .toEqual([{ x: '2!' }])
})
