/* UserList.js
  Code adding a new user. 
*/

function addUser(event) {
  event.preventDefault();
  let form = document.querySelector('.create__form');
  //Optional validation goes here:
  const data = {
    email: form.email.value,
    f_name: form.f_name.value,
    l_name: form.l_name.value
  };

  create(data);
}
