function Elf(name, weapon) {
    console.log('this', this)
  this.name = name;
  this.weapon = weapon;
}

//this basically attaches the .attack method to
//the prototype if we set the 'new' keword
Elf.prototype.attack = function () {
  return "attack with " + this.weapon;
};

const peter = new Elf("petter", "stones");
console.log(peter.name);
