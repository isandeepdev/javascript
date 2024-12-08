# Abstract Euality Comparison (==) vs Strict Equality Comparison (===)

`==` and `===` both checks for type if the value's type matches both comparison is same, but if types does not matches `==` allows coercion while `===` does not.

## Is coercion helpful in an equality comparison or not?

The ESLint rule eqeqeq prevents the use of == (Abstract Equality Comparison). Whether this rule is helpful its a decision of your team. However, it’s important to understand when and how to use == effectively, as it can help you avoid unnecessary bugs caused by unexpected type coercion.

## Abstract Equality Comparsion

Abstract Equality Comparsion is same when the values type matches. If Type(x) is same as Type(y) then it return the result of performing **Strict Equality Comparison x===y**.

- If x is null and y is undefined, return true.

- If x is undefined and y is null, return true.

If only if Type(x) and Type(y) does not matches, Abstract Equality Comparison allow coercion.

- If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).

- If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.

- If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.

- If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).

- If Type(x) is either String or Number and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).

- If Type(x) is Object and Type(y) is either String or Number, return the result of the comparison ToPrimitive(x) == y.

## Strict Equality Comparison
