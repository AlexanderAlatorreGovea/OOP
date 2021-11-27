//export Parent Class
export class Animal {
  age: number;
  legs: number;
  name: string;
  lives = 1;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }

  meow(): string {
    return "ROAR ROAR ROAR";
  }
}

//child
export class Cat extends Animal {
  lives = 9;

  constructor(age: number, legs: number, name: string) {
    super(age, legs, name);
  }

  meow(): string {
    super.meow();
    super.lives;
    return "meow";
  }
}

const cat = new Cat(19, 4, "baby");
console.log(cat.meow());
