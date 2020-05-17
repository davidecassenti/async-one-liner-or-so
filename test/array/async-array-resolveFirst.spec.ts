import resolveFirst from '../../dist/array/async-array-resolveFirst'

it('resolveFirst', (done) => {
  const clock = jest.useFakeTimers()

  const arr = [
    new Promise(resolve => setTimeout(() => resolve(1), 200)),
    new Promise(resolve => setTimeout(() => resolve(2), 100)),
    new Promise(resolve => setTimeout(() => resolve(3), 300))
  ]

  resolveFirst(arr).then(value => {
    expect(value).toBe(2)
    jest.clearAllTimers()
    done()
  })

  jest.advanceTimersByTime(500)
})
