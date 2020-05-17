import queue from '../../dist/exec/async-exec-queue'

async function testQueueMaxConcurrency (maxConcurrency: number): Promise<[number[], number]> {
  let count = 0
  let maxCount = 0

  const promiseFn = (index: number) => (resolve: Function): void => {
    count += 1
    maxCount = Math.max(count, maxCount)

    setTimeout(() => {
      count -= 1
      resolve(index)
    })
  }

  const result = await queue<number>(
    maxConcurrency,
    () => new Promise(promiseFn(0)),
    () => new Promise(promiseFn(1)),
    () => new Promise(promiseFn(2)),
    () => new Promise(promiseFn(3)),
    () => new Promise(promiseFn(4)),
  )

  return [result, maxCount]
}

it('queue', async () => {
  const [result1, maxCount1] = await testQueueMaxConcurrency(1)

  expect(result1).toEqual([0, 1, 2, 3, 4])
  expect(maxCount1).toBe(1)

  const [result3, maxCount3] = await testQueueMaxConcurrency(3)

  expect(result3).toEqual([0, 1, 2, 3, 4])
  expect(maxCount3).toBe(3)

  const [result10, maxCount10] = await testQueueMaxConcurrency(10)

  expect(result10).toEqual([0, 1, 2, 3, 4])
  expect(maxCount10).toBe(5)
})
