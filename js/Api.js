/* Api.js
  Code for general CRUD-operations with promises.
  Generally written (not necesarily users)
*/
//https://rest-small.herokuapp.com/docs/
//https://rest-large.herokuapp.com/docs/
const url = 'https://rest-small.herokuapp.com/users';

//Get All, converted to JSON for cleanest possible result to work with
function getAllJSON() {
  const result = fetch(url).then((response) => response.json());
  return result;
}

//returns promise - w/o stopping execution - ES2017
async function getAllAsync() {
  //inside async function we can wait for promises
  const result = await fetch(url);
  const data = await result.json();
  console.log('Get All async', data);
  return data;
}

/* Examples */
//chain of async AJAX-calls.
function getChainFetch() {
  const result = fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return getById(data[0].id);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

  return result;
}

//chain of async ajax-calls with arrow-functions
function getChainFetchArrow() {
  const result = fetch(url)
    .then((response) => response.json())
    .then((data) => getById(data[0].id))
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  return result;
}

//chain of async ajax calls with async/await for consuming promises. Must be more than 1 user.
async function getChainAsync() {
  try {
    const allUsers = await fetch(url);
    const allUsersJson = await allUsers.json();
    const user = await getById(allUsersJson[1].id);
    const userJson = await user.json();
    return userJson;
  } catch (err) {
    throw err;
  }
}

//async function will run when it's done. First and third will be written out first, even though the function call is in the middle.
console.log('first');
const returnedValue = getChainAsync();
console.log('third');
console.log(returnedValue);
getChainAsync().then(
  (result) => console.log(result),
  (err) => console.log(`Oh no! ${err.message}`)
);
