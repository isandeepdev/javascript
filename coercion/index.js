const obj = { value: 20 };

console.log(obj - 10);
console.log(`${obj}20`);

obj.valueOf = function () {
  return this.value;
};

obj.toString = function () {
  return "10";
};

console.log(obj - 10);
console.log(`${obj}20`);
