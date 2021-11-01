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
  });
}

function updateUser(event) {
  event.preventDefault();
  //optional validation

  const data = {
    email: form.email.value,
    f_name: form.f_name.value,
    l_name: form.l_name.value
  };
  if (userId) {
    data.id = userId;
    data.presentation = form.presentation.value;
    console.dir(data);
    update(data);
  } else {
    create(data);
  }

  window.location.href = '/read.html';
}
