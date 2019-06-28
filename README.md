# class-callable

> make class callable

[![npm version](https://badge.fury.io/js/class-callable.svg)](https://badge.fury.io/js/class-callable)
[![Build Status](https://www.travis-ci.com/Himself65/callable-class.svg?branch=master)](https://www.travis-ci.com/Himself65/callable-class)

## USAGE

```bash
yarn add class-callable
```

```js
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

class C extends Callable {
  constructor () {
    super(function () {
      return 'called'
    })
  }
}

const a = new A()
a()
// 'called'
const b = new B()
b()
// 'called'
const c = new C()
c()
// 'called'
```

## LICENSE

Follow [MIT](LICENSE) LICENSE