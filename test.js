const Callable = require('./')

class A extends Callable {
  constructor (props) {
    super('__call__')
  }

  __call__ () {
    return 'called'
  }
}

class B extends Callable {
  __call__ () {
    return 'called'
  }
}

describe('Unit test', () => {
  it('should pass', () => {
    const a = new A()
    expect(a()).toBe('called')
    const b = new B()
    expect(b()).toBe('called')
  })
})
