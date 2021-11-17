/* UserList.js
  Code for rendering a list of Users.
  
*/
const userContainer = document.querySelector('ul.gallery');

getAllJSON().then((users) => {
  //loop through the array of users
  users.forEach((user) => {
    //for each user, call render user and send the current user
    const userHTML = renderUser(user);
    //add the HTML for the current user into the existing userContainer.
    userContainer.insertAdjacentHTML('beforeend', userHTML);
  });
});
