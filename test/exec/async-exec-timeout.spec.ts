import timeout from '../../dist/exec/async-exec-timeout'

it('timeout', async () => {
  const clock = jest.useFakeTimers()

  let resultX = 0
  let resultY = 0
  let resultZ = 0

  timeout<number>(() => { resultX = 3 }, 500)
  timeout<number>(() => { resultY = 5 }, 1000)
  timeout<number>(() => { resultZ = 7 })

  expect(resultX).toBe(0)
  expect(resultY).toBe(0)
  expect(resultZ).toBe(0)

  jest.advanceTimersByTime(1)

  expect(resultX).toBe(0)
  expect(resultY).toBe(0)
  expect(resultZ).toBe(7)

  jest.advanceTimersByTime(510)

  expect(resultX).toBe(3)
  expect(resultY).toBe(0)

  jest.advanceTimersByTime(510)
  expect(resultX).toBe(3)
  expect(resultY).toBe(5)

  jest.clearAllTimers()
})
