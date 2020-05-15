import test from 'ava'
import sinon from 'sinon'

import wait from '../../dist/exec/async-exec-wait'

test.cb('wait', (t) => {
  const clock = sinon.useFakeTimers()

  wait(500).then(() => {
    // when the second wait is triggered, the test passes
    clock.restore()
    t.end()
  })

  wait().then(() => {
    clock.tick(500) // the first wait will trigger the second
  })

  clock.tick(1) // this will trigger the first wait
})
