import wait from '../../dist/exec/async-exec-wait'

it('wait', (done) => {
  jest.useFakeTimers()

  wait(500).then(() => {
    // when the second wait is triggered, the test passes
    jest.clearAllTimers()
    done()
  })

  wait().then(() => {
    jest.advanceTimersByTime(500) // the first wait will trigger the second
  })

  jest.advanceTimersByTime(1) // this will trigger the first wait
})
