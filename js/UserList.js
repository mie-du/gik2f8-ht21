const container = document.querySelector('ul.gallery');
let userList = '';
//returns a promise - placeholder of future result of async operation
getAllJSON().then((users) => {
  userList = users.map((user) => {
    container.innerHTML = renderUser(user);
  });
});
