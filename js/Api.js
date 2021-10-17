/* Api.js
  Code for general CRUD-operations with promises.
  Generally written (not necesarily users)
*/
const url = 'https://rest-small.herokuapp.com/users';

//get object by ID
function get(id) {
  return fetch(`${url}/${id}`);
}

//Get All, converted to JSON for cleanest possible result to work with
function getAllJSON() {
  //first response returns data stream, needs to be converted to json.
  const result = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  return result;
}
//create
function create(data) {
  return fetch(`${url}/${id}`, { method: 'POST' });
}
//update
function update(data) {
  return fetch(`${url}/${id}`, { method: 'PUT' });
}
//delete
function remove(data) {
  return fetch(`${url}/${id}`, { method: 'DELETE' });
}
