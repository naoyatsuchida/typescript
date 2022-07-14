function createCounter() {
    let val = 0;
    return {
        increment() { ++val },
        getVal(){return val}
    }
}
let counter = createCounter();
counter.increment();
