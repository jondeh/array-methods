function forEach (cb) {
  for (let i = 0; i < this.length; i++) {
    this[i] = cb(this[i], i, this)
  }
}

Array.prototype.forEach = forEach
