function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  console.log("this", this);
}

//this basically attaches the .attack method to
//the prototype if we set the 'new' keword
Elf.prototype.attack = function () {
  return "attack with " + this.weapon;
};

const peter = new Elf("petter", "stones");
console.log(peter.name);
ß