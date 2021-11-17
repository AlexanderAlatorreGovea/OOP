class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

const peter = new Elf("peter", "stones");
//peter is an instance of Elf
//this is instantiation
console.log(peter instanceof Elf)
console.log(peter.attack());
