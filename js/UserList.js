/* UserList.js
  Code for rendering a list of Users.
*/

const container = document.querySelector('ul.gallery');
let userList = '';
//function getAllJSON from Api.js. Api.js has encapsulated the api-communication, gui does not need to know.
//returns a promise - placeholder of future result of async operation
getAllJSON().then((users) => {
  users.map((user) => {
    userList += renderUser(user);
  });
  console.log(userList);
  container.insertAdjacentHTML('afterbegin', userList);
});
