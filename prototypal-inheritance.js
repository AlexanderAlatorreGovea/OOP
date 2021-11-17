const elfFunctions = {
  attack() {
    return "attack with" + this.weapon;
  },
};

const elf = {
  name: "orwell",
  weapon: "bow",
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);

  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}

const peter = createElf("petter", "stones");
console.log(peter.attack());
