import promisify from '../../dist/exec/async-exec-promisify'

it('promisify', (done) => {
  const clock = jest.useFakeTimers()

  const fn1 = async (x: number, callback: Function): Promise<void> => { setTimeout(() => callback(x), 500) }
  const fn2 = async (x: number, y: number, callback: Function): Promise<void> => { setTimeout(() => callback(x, y), 500) }
  const fn3 = async (x: number, y: number, z: number, callback: Function): Promise<void> => { setTimeout(() => callback(x, y, z), 500) }

  const promiseFn1 = promisify(fn1)
  const promiseFn2 = promisify(fn2)
  const promiseFn3 = promisify(fn3)

  let x1 = 0
  let x2 = 0
  let x3 = 0
  let y2 = 0
  let y3 = 0
  let z3 = 0

  promiseFn1(1).then(() => {
    x1 = 1
  })

  promiseFn2(1, 2).then(() => {
    x2 = 1
    y2 = 1
  })

  promiseFn3(1, 2, 3).then(() => {
    x3 = 1
    y3 = 1
    z3 = 1
  })

  expect(x1).toBe(0)
  expect(x2).toBe(0)
  expect(x3).toBe(0)
  expect(y2).toBe(0)
  expect(y3).toBe(0)
  expect(z3).toBe(0)

  jest.advanceTimersByTime(510)

  Promise.all([promiseFn1, promiseFn2, promiseFn3]).then(() => {
    expect(x1).toBe(1)
    expect(x2).toBe(1)
    expect(x3).toBe(1)
    expect(y2).toBe(1)
    expect(y3).toBe(1)
    expect(z3).toBe(1)

    jest.clearAllTimers()

    done()
  })
})
