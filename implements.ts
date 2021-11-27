//export Parent Class
export class Animal {
  age: number;
  legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

//child
export class Cat extends Animal {
  constructor(age: number, legs: number, name: string) {
    super(age, legs, name);
  }

  meow(): string {
    return "meow";
  }
}

//shape of our parent class
export class Dog implements Animal {
  name: string;
  age: number;
  legs: number;

  woof(): string {
    return "Woof woof";
  }
}

const dog = new Dog();
const cat = new Cat(19, 4, "baby");
console.log(dog.woof());
