var num: number = 123;
let identity = (num: number): number => {
    return num;
}

var num: number;

num = 123;
num = parseInt('123');

var boolArray: boolean[];

boolArray = [true,false]

// インターフェイス
interface Name{
    first: string;
    second: number;
}
var names: Name;
names = {
    first: 'naoya',
second:2}

// hoge:{}でもinterfaceと同じことができるが何度も利用するものはin
// interfaceで作成すること
var tako: { first: string, second: number };
tako = {first:'kenyja',second:24}


// ジェネリック
// function numTo<T>(arg: T): T{
//    let str;
//    str = typeof(arg) === 'string' ? arg.length: arg
//     return str;
// }

// ユニオン型
function formatoCommand(comand: string[] | string) {
var line = '';
    if (typeof comand === 'string') {
        line = comand.trim();
    } else {
        line = comand.join(' ').trim();
    }
}

// 交差型 複数のオブジェクトを結合して利用する
function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second };
}

const x = extend({ a: "hello" }, { b: 42 });

// x now has both `a` and `b`
const a = x.a;
const b = x.b;
