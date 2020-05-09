import test from 'ava'
import sinon from 'sinon'

import resolveFirst from '../../dist/array/async-array-resolveFirst'

test.cb('resolveFirst', (t) => {
  const clock = sinon.useFakeTimers()

  const arr = [
    new Promise(resolve => setTimeout(() => resolve(1), 200)),
    new Promise(resolve => setTimeout(() => resolve(2), 100)),
    new Promise(resolve => setTimeout(() => resolve(3), 300))
  ]

  resolveFirst(arr).then(value => {
    t.is(value, 2)
    clock.restore()
    t.end()
  })

  clock.tick(500)
})
