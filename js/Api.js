const url = 'https://rest-small.herokuapp.com/users';
//get
function get(id) {
  return fetch(`${url}/${id}`);
}
//getAll
function getAll() {
  return fetch(url);
}
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
function create(data) {}
//update
function update(data) {}
//delete
function remove(id) {}
