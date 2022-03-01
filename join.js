function join (val = ',') {
  let str = this[0] || ''
  for (let i = 1; i < this.length; i++) {
    str += val + this[i]
  }
  return str
}

Array.prototype.join = join
