# Injectee
[![NPM version][npm-image]][npm-url]

register a component and use it in a vendor everywhere when using typescript! 💗

## Installation
```bash
npm i injectee

yarn add injectee
```

## Usage

```ts
import { Component, Vendor, Inject } from 'injectee';

// register a component
@Component
class Dog {
    say() {
        console.log('wang wang');
    }
}

// register a vendor
@Vendor
class Person {
    // inject dog component for person instance
    @Inject
    dog: Dog;

    public getMyDog() {
        return this.dog;
    }
}

// create instances from vendor
const me = new Person();
const she = new Person();

console.log(me === she);            // false
console.log(me.dog === she.dog);    // true, dog is injected as a single instance
console.log(me.getMyDog());         // Dog {}
me.dog.say();                       // wang wang
```

[npm-image]: https://img.shields.io/npm/v/injectee.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/injectee
