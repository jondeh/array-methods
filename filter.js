function filter (cb) {
  let resultArr = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) resultArr.push(this[i])
  }
  return resultArr
}

Array.prototype.filter = filter
