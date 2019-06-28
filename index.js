function CallableInstance (property = '__call__') {
  let func
  if (typeof property === 'function')
    func = property
  else
    func = this.constructor.prototype[property]
  const apply = function () {
    return func.apply(apply, arguments)
  }
  Object.setPrototypeOf(apply, this.constructor.prototype)
  Object.getOwnPropertyNames(func).forEach(function (p) {
    Object.defineProperty(apply, p, Object.getOwnPropertyDescriptor(func, p))
  })
  return apply
}

CallableInstance.prototype = Object.create(Function.prototype)

module.exports = CallableInstance