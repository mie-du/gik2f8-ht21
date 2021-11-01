/* UserWrite.js
  Changed UserAdd to generic file for both create and update. Name is arbitrary. 
 */
//fetching get-parameters to check if it's create or update.
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');
let form = document.querySelector('.create__form');

if (userId) {
  get(userId).then((data) => {
    form.email.value = data.email;
    form.f_name.value = data.f_name;
    form.l_name.value = data.l_name;
    form.presentation.value = data.presentation;
  });
}

function updateUser(event) {
  event.preventDefault();
  //optional validation

  /* Fetching known data from form */
  const data = {
    email: form.email.value,
    f_name: form.f_name.value,
    l_name: form.l_name.value
  };
  if (userId) {
    /* If we're updating, fetch more data and include id */
    data.id = userId;
    data.presentation = form.presentation.value;

    update(data);
  } else {
    /* If creating, just pass along basic form info */
    create(data);
  }
  //Redirect to list of users when done.
  window.location.href = '/read.html';
}
