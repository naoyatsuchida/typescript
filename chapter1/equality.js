console.log(5 == "5"); // true   , TS Error
console.log(5 === "5"); // false , TS Error
console.log("" == "0"); // false
console.log(0 == ""); // true

console.log("" === "0"); // false
console.log(0 === ""); // false

// 上記のようなエラーが発生するため原則===を使う


var foo = {};
var bar = foo; // barは同じオブジェクトへの参照です

foo.baz = 123;
console.log(bar.baz); // 123
