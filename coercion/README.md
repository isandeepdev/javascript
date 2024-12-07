# Abstract Operations

Abstract operations are the fundamental building block that JavaScript use to deal with type conversion in JavaScript. These operations are not a part of the JavaScript language we cannot use these operations in our code; instead they are conceptual operation that describes how JavaScript should behave in different situation.

# Type conversion (aka coercion)

JavaScript performs automatic type conversion as needed.

## ToPrimitive(hint)

ToPrimitive is not the actual function in JavaScript this is the conceptual operation that define set of algorithms to converts the non-primitive values like (an object, an array or a function) into primitive.

- Based upon the context of the operation hint can either be number or string.
- When the context is "number" valueOf() is called by ToPrimitive first.
- When the context is "string" toString() is called by ToPrimitive first.

```js
// algo 1 -> When hint is passed as number {} + 10
ToPrimitive(input, "number");
valueOf();
toSting();
```

```js
// algo 2 -> When hint is passed as string {} + "Hello"
ToPrimitive(input, "string");
toString();
valueOf();
```

## ToString

ToString abstract operation takes any value and gives the string representation of the value.

<!-- prettier-ignore -->
```js
null                            "null"
undefined                       "undefined"
true                            "true"
false                           "false"
2.5019                          "2.5019"
0                               "0"
-0                              "0"
```

When ToString is used on non-primitive it invokes ToPrimtive with the string hint and calles toString() and then valueOf()

<!-- prettier-ignore -->
```js
[]                              ""
[1,2,3]                         "1,2,3"
[null, undefined]               ","
[[[],[],[]],[]]                 ",,,"
[,,,,]                          ",,,"

{}                              "[object Object]"
{a:2}                           "[object Object]"
{toString(){return "X"}}        "X"
```

## ToNumber

ToNumber abstract operation takes any value and gives the number representation of the value.

<!-- prettier-ignore -->
```js
""                              0
"0"                             0
"-0"                            -0
" 0009  "                       9
"2.1531"                        2.1531
"0."                            0
".0"                            0
"."                             NaN
"0xaf"                          175
```

<!-- prettier-ignore -->
```js
false                           0
true                            1
null                            0
undefined                       NaN
```

When we used to ToNumber on a non-primitive it invokes the ToPrimitive with the number hint and calls valueOf() and then toString()

for any [] and {} by default valueOf() {return this}

```js
[""]                            0
["0"]                           0
["-0"]                          -0
[null]                          0
[undefined]                     0
[1,2,3]                         NaN
[[[[]]]]                        0

{...}                           NaN
{valueOf() {return 3}}          3
```

## ToBoolean

Any value that is not a boolean and it used in a place that needs a boolean this abstract operation occured, this operation less algorithmic more lookup.

Any value that is not falsy considered it as truthy

```
""
0, -0
null
NaN
false
undefined
```
