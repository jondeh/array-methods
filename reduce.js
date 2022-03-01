function reduce (cb, start = 0) {
  let accumulator = start
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this)
  }
  return accumulator
}

Array.prototype.reduce = reduce
