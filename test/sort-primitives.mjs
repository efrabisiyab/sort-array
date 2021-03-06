import Tom from 'test-object-model'
import sortArray from '../index.mjs'
import getAssert from 'isomorphic-assert'

async function getTom () {
  const a = await getAssert()
  const tom = new Tom()

  tom.test('simple asc', function () {
    const fixture = [4, 1, 32, 21, 34, 39, 46, 11, 19, 12, 52, 65, 75, 23, 74]
    const expected = [1, 4, 11, 12, 19, 21, 23, 32, 34, 39, 46, 52, 65, 74, 75]

    const order = ['asc']
    const result = sortArray(fixture, { order })
    a.deepStrictEqual(result, expected)
  })

  tom.test('simple desc', function () {
    const fixture = [22, 79, 66, 10, 70, 38, 100, 34, 60, 99, 88, 4, 39, 33, 52]
    const expected = [100, 99, 88, 79, 70, 66, 60, 52, 39, 38, 34, 33, 22, 10, 4]

    const order = ['desc']
    const result = sortArray(fixture, { order })
    a.deepStrictEqual(result, expected)
  })

  tom.test('custom', function () {
    const fixture = [3, 1, 3, 3, 5, 3, 1, 5, 1, 5]
    const expected = [5, 5, 5, 1, 1, 1, 3, 3, 3, 3]

    const custom = [5, 1, 3]
    const result = sortArray(fixture, { order: 'custom', customOrders: { custom } })
    a.deepStrictEqual(result, expected)
  })

  return tom
}

export default getTom()
