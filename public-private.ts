//private: is only accessible in the parent class not the child
//protected: makes it accessible in the child classes but not once the class is instantiated
//static: we can only access a property, utilty functions
class AnimalC {
  public age: number;
  private legs: number;
  protected name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}
const cat = new AnimalC(22, 4, "baby");
console.log(cat);

class Cat extends AnimalC {
  constructor(data: { age: number; legs: number; name: string }) {
    super(data.age, data.legs, data.name);
  }
}

const c = new Cat({
  age: 22,
  legs: 3,
  name: "baby",
});

console.log(c);
