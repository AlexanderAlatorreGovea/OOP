//composition
const swimmer = ({ name }) => ({
  swim: () => `${name} swam `,
  arrayOfSwimmers: (name) => [].push(name),
});

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`),
  };
}

function swimmingMonsterCreator(name) {
  const moster = { name };

  return {
    ...moster,
    ...swimmer(moster),
    ...flyer(moster),
  };
}

const object = swimmingMonsterCreator("alex");
object.swim();
object.arrayOfSwimmers();
object.fly();

// dependency inversion

const dependencyInversion = (client) => (lastName) => {
  const makeSwimmer = client.swim();

  return makeSwimmer + lastName;
};

const injectedProperties = dependencyInversion(swimmingMonsterCreator("alex"));

//console.log(injectedProperties("govea"));
