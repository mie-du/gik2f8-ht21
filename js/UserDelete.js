/* UserDelete.js
  Code for populating dropdown with user and functionality to delete the selected one.  */

const select = document.querySelector('#user');

getAllJSON().then((users) => {
  users.map((user) => {
    select.options[select.options.length] = new Option(`${user.f_name} ${user.l_name}`, user.email);
  });
});

/* basically superflous function, added for clarity.  */
function deleteUser(e) {
  e.preventDefault();

  //call to api-function.
  remove({ email: select.value });

  location.reload();
}
