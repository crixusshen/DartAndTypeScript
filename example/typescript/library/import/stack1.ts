const _contents = []
const isEmpty = () => _contents.length === 0
const last = () => isEmpty() ? new Error('Cannot get top of empty stack') : _contents.reverse()[0]
const pop = () => isEmpty() ? new Error('Cannot pop empty stack') : _contents.pop()
const push = (e) => {
  _contents.push(e)
  return e
}

export {
  last,
  pop,
  push,
}