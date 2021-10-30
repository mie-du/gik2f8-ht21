/* UserList.js
  Code for rendering a list of Users.
*/

const container = document.querySelector('ul.gallery');
let userList = '';
//returns a promise - placeholder of future result of async operation
getAllJSON().then((users) => {
  users.map((user) => {
    userList += renderUser(user);
  });
  container.insertAdjacentHTML('afterbegin', userList);
});
