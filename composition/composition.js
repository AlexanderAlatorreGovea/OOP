//composition
const swimmer = ({ name }) => ({
  swim: () => `${name} swam `,
  arrayOfSwimmers: (name) => [].push(name),
});

const flyer = ({ name }) => {
  return {
    fly: () => `${name} flew`,
  };
};

const getFullName = ({ name }) => ({
  fullName: () => name,
});

function swimmingMonsterCreator(name) {
  const moster = { name };

  return {
    ...moster,
    ...getFullName(moster),
    ...swimmer(moster),
    ...flyer(moster),
  };
}

const object = swimmingMonsterCreator("alex");

console.log(object.swim());

object.swim();
object.arrayOfSwimmers();
//object.fly();

// dependency inversion

const dependencyInversion = (client) => (lastName) => {
  const makeSwimmer = client.fullName();

  return makeSwimmer + " " + lastName;
};

const injectedProperties = dependencyInversion(swimmingMonsterCreator("alex"));

console.log(injectedProperties("govea"));
