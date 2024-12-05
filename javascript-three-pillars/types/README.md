# What are Types

Types in programming language defines the kind of data a variable can hold. In JavaScript types can be divided into two categories:

## Primitive Types

Primitive types are the fundamental types in JavaScript, they are immutable, primitive types can also behave like objects because of boxing.

- `string`
- `number`
- `boolean`
- `symbol`
- `bigInt`
- `undefined`
- `null`

## Objects

Objects include everything that is not a primitive, objects are mutable.

Unlike languages like C++ and Java, In JavaScript and in other dynamically typed languages, it is not the variables that have types. .t is the values themselves that have types.

# `typeof` operator

`typeof` operator tells the type of the value, it always return string which describes the value's type.

### "undefined"

`typeof` operator returns "undefined" for variables that is not declared, declared but not assigned a value or explicitly set to undefined.

<!-- prettier-ignore -->
```js
typeof x;       // "undefined"
```

`typeof` operator is the only operator in JavaScript that can reference a variable that is not exist or declared without throwing an error.

### "object"

<!-- prettier-ignore -->
```js
typeof { a: 1 };        // "object"
typeof [1, 2, 3];       // "object"
typeof null;            // "object"
```

### "boolean"

<!-- prettier-ignore -->
```js
typeof true;            // "boolean"
typeof false;           // "boolean"
```

### "number"

<!-- prettier-ignore -->
```js
typeof 30;              // "number"
typeof NaN;             // "number"
typeof Infinity;        // "number"
```

### "bigint"

<!-- prettier-ignore -->
```js
typeof 10n;             // "bigint"
```

### "string"

<!-- prettier-ignore -->
```js
typeof "hello";         // "string"
```

### "symbol"

<!-- prettier-ignore -->
```js
typeof Symbol("id");    // "symbol"
```

### "function"

<!-- prettier-ignore -->
```js
typeof function() {};   // "function
"
```
