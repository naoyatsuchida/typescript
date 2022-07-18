interface Person { name: string, age: number; };

class Naoya implements Person{
    name: string;
    age: number;
    constructor() {
        this.name = 'naoya';
        this.age=26
    }
}

enum Color {
    red,green,white
}

console.log(Color[0]);
