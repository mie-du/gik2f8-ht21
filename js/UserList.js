/* UserList.js
  Code for rendering a list of Users.
  
*/

const container = document.querySelector('ul.gallery');
let userList = '';
//function getAllJSON from Api.js. Api.js has encapsulated the api-communication, gui does not need to know.
//returns a promise - placeholder of future result of async operation
//2 arguments to the then-method, callback functions for first success, then failure, then finally (always called, regardless of success or failure).
/* getAllJSON().then(
  (users) => {
    users.map((user) => {
      userList += renderUser(user);
    });
    container.insertAdjacentHTML('afterbegin', userList);
  },
  (err) => console.log(`Oh no! ${err}`)
); */

getAllAsync().then(
  (users) => {
    users.map((user) => {
      userList += renderUser(user);
    });
    container.insertAdjacentHTML('afterbegin', userList);
  },
  (err) => console.log(`Oh no! ${err}`)
);
