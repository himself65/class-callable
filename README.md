# class-callable

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