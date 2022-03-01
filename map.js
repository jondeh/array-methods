function map (cb) {
  let resultArr = []
  for (let i = 0; i < this.length; i++) {
    resultArr.push(cb(this[i], i, this))
  }
  return resultArr
}

Array.prototype.map = map
