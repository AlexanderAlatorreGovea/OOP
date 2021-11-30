//takes in some data and returns an object with that json data
//so we are faking a response object with json: to return some data
module.exports = (data) => {
  return {
    json: () => Promise.resolve(data),
  };
};
