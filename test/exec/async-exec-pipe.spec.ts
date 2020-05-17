import pipe from '../../dist/exec/async-exec-pipe'

it('pipe', async () => {
  const pipedFn = pipe(
    async (x: number) => Promise.resolve(x + 1),
    async (x: boolean) => Promise.resolve(x && 2),
    async (x: number) => Promise.resolve(`${x}!`),
    async (x: string) => Promise.resolve({ x }),
    async (x: Record<string, string>) => Promise.resolve([x])
  )

  expect(await pipedFn(1))
    .toEqual([{ x: '2!' }])
})
