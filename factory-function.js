const elf = {
  name: "orwell",
  weapon: "bow",
  attack() {
    return "attack with" + elf.weapon;
  },
};

//Factory Functions
//factory functions create object for us
//functions that act like factories and create
//functions for us
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "attack with " + weapon;
    },
  };
}

const peter = createElf("petter", "stones");
console.log(peter.attack());
