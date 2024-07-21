const array = [1, 2, 3, 4];
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const isEven = (value) => {
  return value % 2 === 0;
};
const isOdd = (value) => {
  return value % 2 === 1;
};
//forEach・・・べたなloop処理  対象：配列
array.forEach((value) => {
  console.log(value);
});

//some・・・ループ内でtrueを返すと処理終了 対象：配列 戻り値：真偽地
console.log(array.some(isEven));

//filter・・・配列内に任意の条件で要素を抽出する 対象：配列 戻り値：抽出した配列
console.log(array.filter(isEven));

// ############################################################
// for ... inは扱いが難しく代替となる仕組みが豊富なため利用しなくていい
// ############################################################

// for...of オブジェクトのkeyをループする 対象：配列、オブジェクト
