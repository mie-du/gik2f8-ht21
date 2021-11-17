/* Api.js
  Code for general CRUD-operations with promises.
  Generally written (not necesarily users)
*/
const url = 'https://rest-small.herokuapp.com/users';

//R=GET
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

//C=POST
//Send object to api for creation.
//Returns the response, which contains information about the created object.
function create(data) {
  const JSONData = JSON.stringify(data);
  console.log(JSONData);
  const result = fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSONData
  });

  return result;
}

//U=PUT
//D=DELETE
