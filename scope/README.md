# Scope (Lexical Scope)

Scope: Where to look for things (identifiers). Before JavaScript start running code it first goes through a parsing phase. During this phase it setup scope this helps during the execution phase JavaScript knows where to look for them.

JavaScript organizes scopes with functions and blocks.

## Scope - Color Bucket Analogy

<!-- prettier-ignore -->
```js
var 🔴instructor = "Kyle";

function 🔴otherClass() {
  var 🔵instructor = "Suzy";
  console.log("Welcome!");
}

function 🔴ask() {
  var 🟢question = "Why?";
  console.log(question);
}

otherClass();                           // Welcome!
ask();                                  // Why?
```
