import test from 'ava'

import pipe from '../../dist/exec/async-exec-pipe'

test('pipe', async (t) => {
  const pipedFn = pipe(
    async (x: number) => Promise.resolve(x + 1),
    async (x: boolean) => Promise.resolve(x && 2),
    async (x: number) => Promise.resolve(`${x}!`),
    async (x: string) => Promise.resolve({ x }),
    async (x: Record<string, string>) => Promise.resolve([x])
  )

  t.deepEqual(
    await pipedFn(1),
    [{ x: '2!' }]
  )
})
