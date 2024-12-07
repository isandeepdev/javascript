# What are Types

Types in programming language defines the kind of data a variable can hold. In JavaScript types can be divided into two categories:

## Primitive Types

Primitive types are the fundamental types in JavaScript, they are immutable, stored by value, primitive types can also behave like objects because of boxing.

- `string`
- `number`
- `boolean`
- `symbol`
- `bigInt`
- `undefined`
- `null`

## Objects (Non-Primitive Types)

Objects include everything that is not a primitive, objects are mutable and stored by reference.

👉 Unlike languages like C++ and Java, In JavaScript and in other dynamically typed languages, it is not the variables that have types. .t is the values themselves that have types.

# `typeof` operator

`typeof` operator tells the type of the value, it always return string which describes the value's type.

### "undefined"

`typeof` operator returns "undefined" for variables that is not declared, declared but not assigned a value or explicitly set to undefined.

<!-- prettier-ignore -->
```js
typeof x;               // "undefined"
```

`typeof` operator is the only operator in JavaScript that can reference a variable that is not exist or declared without throwing an error.

### "object"

typeof null is object - its a bug

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

typeof NaN is "number"

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
typeof function() {};   // "function"
```

# undefined vs undeclared vs uninitialized (aka TDZ)

### undefined

`undefined` means there's definitely a variable but at the moment, it has no value or explicitly set to `undefined`.

### undeclared

<!-- prettier-ignore -->
```js
console.log(lang);      // ReferenceError: lang is not defined
```

`undeclared` means variable never been created JavaScript will throw a **ReferenceError** when you try to access it.

### uninitialized

<!-- prettier-ignore -->
```js
console.log(lang);      // ReferenceError: Cannot access 'lang' before initialization
let lang = "JavaScript";
```

Certain variables like block scope, don't get initialized. They never initially get set to `undefined`.

When you try to access uninitialized variable, JavaScript will throw a **ReferenceError: Cannot access 'variableName' before initialization**.

# Special Values

Within those primitive types there are special values we should pay attention to.

### NaN

~~Not a Number~~ --> Invalid Number

NaN is a part of IEEE 754 standard under the category of special values and it represent the invalid number.

- `typeof` NaN is number
- It usually occurs due invalid numeric operation or conversion fails.
- NaN is the only value in JavaScript which is not equal to it itself.

use `Number.isNaN` instead of ~~`isNaN`~~ because `isNaN` coerce the value to number before checking it for NaN.

<!-- prettier-ignore -->
```js
isNaN("JavaScript");        // true
```

<!-- prettier-ignore -->
```js
Number.isNaN("JavaScript")  // false
```

### Negative Zero

- Negative zero is a part of IEEE 754 standard
- It represent zero with sign bit on

Initially JavaScript felt that JavaScript developers would never want a Negative zero, so they went to extreme lengths to try to pretend that negative zero doesn't exist.

<!-- prettier-ignore -->
```js
var trend = -0;
trend === -0;               // true

trend.toString();           // "0"
trend === 0;                // true
trend < 0;                  // false
trend > 0;                  // false
```

Finally, in ES6 Object.is is introduced which check for Negative zero

<!-- prettier-ignore -->
```js
Object.is(trend, -0);       // true
Object.is(trend, 0);        // false
```

**Negative zero - practical use case in programming**

<!-- prettier-ignore -->
```js
function formatTrend(trendRate) {
    var direction = (trendRate < 0 || Object.is(trendRate, -0)) ? "⬇" : "⬆";
    return `${direction} ${Math.abs(trendRate)}`
}

formatTrend(-5);            // "⬇ 5"
formatTrend(5);             // "⬆ 5"
formatTrend(-0);            // "⬇ 0"
formatTrend(0);             // "⬆ 0"
```
