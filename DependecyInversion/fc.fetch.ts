/*
Reference: 
https://github.com/fChristenson/javascript-integration-testing/blob/master/common/MockJsonResponse.js
https://dev.to/paularah/dependency-injection-in-javascript-1bfk
*/

const getProducts = async (productId) => {
  const response = await fetch(
    `https://api.myservice.com/products/${productId}`
  );

  return response.json();
};

// dependecy inversion

//does not import fetch in the file but it is a dependency of the module
//I need fetch to work properly, can you please provide fetch for me
const makeGestUser = (fetch) => async (userId) => {
  const response = await fetch(`https://api.myservice.com/users/${userId}`);

  return response.json();
};

const makeSaveUser = (fetch) => async (userId, userData) => {
  const response = await fetch(`https://api.myservice.com/users/${userId}`, {
    method: "POST",
    data: userData,
  });

  return response.json();
};

//higher order functions that take in the fetch function first
module.exports = (fetch: Promise<void>) => {
  return {
    getUser: makeGestUser(fetch),
    saveUser: makeSaveUser(fetch),
  };
};
