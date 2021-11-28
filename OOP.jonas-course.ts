class PersonCl {
  birthYear: number;
  firstName: string;

  constructor(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  }

  calcAge() {
    console.log(1239 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // getters and setters
  set age(year) {
    this.birthYear = this.birthYear + year;
  }

  get age() {
    return this.birthYear;
  }

  // static methods
  // these are not added to the prototype
  static hey() {
    console.log("hey there");
  }
}

const jessica = new PersonCl("jessica", 1993);
jessica.calcAge();
jessica.greet();
jessica.age = 33;
console.log(jessica.age);
//static methods are only available with the entire
//class object not available in the prototype once instantiated
console.log(PersonCl.hey());

class Student extends PersonCl {
  course: string;

  constructor(firstName, birthYear, course) {
    //super needs the arguments of the Parent class
    super(firstName, birthYear);
    this.course = course;
  }

  calcAge() {
    return `I am ${this.birthYear} years old`;
  }
}

const martha = new Student("martha", 22, "comp sci");
console.log(martha.calcAge());
