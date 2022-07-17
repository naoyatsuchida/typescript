// イテレーターリザルト

type Hoge = {
    value: string;
    done: boolean;
}

type HogeIterator = {
    next: () => Hoge;
}
// イテレーター
const hogeIterator: HogeIterator = {
    next: () => {
        return {value: "hgo",done: false}
}
}



type HogeIterable = {
  [Symbol.iterator]: () => HogeIterator;
}

// hogeIterableはイテラブル
const hogeIterable: HogeIterable = {
  [Symbol.iterator]: () => {
    return {
      next : () => {
        return { value: 'hogehoge', done: false }
      }
    }
  }
}


// ここからがgenerator

function* infini() {
    var i = 0;
    while (i < 10) {
        yield i++;
    }
}

var itr = infini();
itr.next();
