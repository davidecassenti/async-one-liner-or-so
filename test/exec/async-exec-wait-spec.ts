import test from 'ava'
import sinon from 'sinon'

import wait from '../../dist/exec/async-exec-wait'

test.cb('wait', (t) => {
  const clock = sinon.useFakeTimers()

  wait(500).then(() => {
    clock.restore()
    t.end()
  })

  clock.tick(510)
})
