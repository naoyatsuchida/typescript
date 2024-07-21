const languages = {
  ja: "日本語",
  en: "英語",
};

/*
const ja = languages.ja;
const en = languages.en;
console.log(ja); // => "日本語"
console.log(en); // => "英語"

*/

const { ja, en } = languages;

// Object.hasOwn オブジェクトの存在確認
console.log(Object.hasOwn(languages, "ja"));

//深いネストを参照する際、?.をつけるとエラーにならずundefiendになる.Optional chaining演算子
console.log(languages.hoge?.hoge);

//静的メソッド

//①オブジェクトの列挙
console.log(Object.keys(languages));
console.log(Object.values(languages));
console.log(Object.entries(languages));

//②オブジェクトのマージと複製
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign(languages, objectA, objectB);
console.log(merged);

//しかしObject.assignの第一引数に既存Objectを指定すると大元まで変わってしまうので基本的に第一引数は{}を指定する。

//ES2018ではspread構文でマージするように新しく出ました
const merged2 = { ...objectA, ...objectB };

//複製はassignをつかって以下のように
const shollowCopy = (obj) => {
  return Object.assign({}, obj);
};

console.log(Object.entries(Object));
