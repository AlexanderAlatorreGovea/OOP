//new -> binding this
function Person(name, age) {
  (this.age = age), (this.name = name);
}

const person = new Person("Xavier", 55);
console.log(person);

//implicit biding
//the function binds it no need to do anything
const person2 = {
  name: "karen",
  age: 50,
  hi() {
    console.log("hi" + this.name);
  },
};

//explicit binding

const person3 = {
  name: "karen",
  age: 50,
  hi: function () {
    console.log("hi" + this.setTimeout);
  }.bind(this),
};

console.log(person3.hi());

//arrow functions
//lexical scope
//wherever we bind the function that is what inherets the this

const person4 = {
  name: "Karen",
  age: 40,
  hi: function () {
    var inner = () => {
      console.log("hi " + this.name);
    };
    return inner();
  },
};
console.log(person4.hi());
