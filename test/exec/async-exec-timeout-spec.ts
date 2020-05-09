import test from 'ava'
import sinon from 'sinon'

import timeout from '../../dist/exec/async-exec-timeout'

test.serial('timeout', async (t) => {
  const clock = sinon.useFakeTimers()

  let resultX = 0
  let resultY = 0
  timeout<number>(() => { resultX = 3 }, 500)
  timeout<number>(() => { resultY = 5 }, 1000)

  t.is(resultX, 0)
  t.is(resultY, 0)

  clock.tick(510)

  t.is(resultX, 3)
  t.is(resultY, 0)

  clock.tick(510)
  t.is(resultX, 3)
  t.is(resultY, 5)

  clock.restore()
})
