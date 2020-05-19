import waitFallback from '../../dist/exec/async-exec-waitFallback'

it('waitFallback', async () => {
  jest.useFakeTimers()

  const result1 = waitFallback(
    async () => new Promise<string>(resolve => setTimeout(() => resolve('yes'), 500)),
    'nope',
    300
  )

  const result2 = waitFallback(
    async () => new Promise<string>(resolve => setTimeout(() => resolve('yes'), 150)),
    'nope',
    300
  )

  jest.advanceTimersByTime(301)

  expect(await result1).toBe('nope')
  expect(await result2).toBe('yes')
})
