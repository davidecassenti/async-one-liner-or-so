import test from 'ava'

import compose from '../../dist/exec/async-exec-compose'

test('compose', async (t) => {
  const composedFn = compose(
    async (x: Record<string, string>) => Promise.resolve([x]),
    async (x: string) => Promise.resolve({ x }),
    async (x: number) => Promise.resolve(`${x}!`),
    async (x: boolean) => Promise.resolve(x && 2),
    async (x: number) => Promise.resolve(x + 1)
  )

  t.deepEqual(
    await composedFn(1),
    [{ x: '2!' }]
  )
})
