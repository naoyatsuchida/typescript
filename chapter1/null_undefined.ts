
/// `foo.bar == undefined` のようなコードを書いたときに、何が起きるか想像してみてください:
console.log(undefined == undefined); // true
console.log(null == undefined); // true

// このようなチェックをすれば、falsyな値について心配する必要はありません
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false


function foo(arg: string | null | undefined) {
  if (arg != null) {
    // `!=` がnullとundefinedを除外しているので、引数argは文字列です
  }
}


function foo2():{a:number,b?:number}{
  // if 何らかの場合に返す値
  return {a:1,b:2};
  // else それ以外の場合に返す値
  return {a:1};
}
