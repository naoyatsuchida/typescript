    let someArray = [9, 2, 5];
    for (var i of someArray) {
        console.log(i);

    }
    interface Iterator<T>{
        next(value?: any): IteratorResult<T>;
        return?(value?: any): IteratorResult<T>;
        throw?(e?: any): IteratorResult<T>;
}
class Component{
    constructor (public name:String){}
}

class Frame implements Iterator<Component>{
    private pointer = 0;
    constructor(public name: String,public components: Component[]){}

    public next(): IteratorResult<Component>{
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            }
        } else {
            return {
                done: true,
                value: 's',
            }
        }
    }
}
