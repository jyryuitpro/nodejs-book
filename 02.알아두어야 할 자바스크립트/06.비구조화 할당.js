const example = {a: 123, b: {c: 135, d: 146}};

const a = example.a;
const d = example.b.d;

const {a, b: {d}} = example;
console.log(a); // 123
console.log(d); // 146

arr = [1, 2, 3];
const [x, y, z] = arr;