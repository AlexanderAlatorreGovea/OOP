//higher order function that takes in some response
//and returns a promise with that response

module.exports = (response) => () => {
  return Promise.resolve(response);
};
