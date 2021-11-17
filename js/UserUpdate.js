const formElement = document.querySelector('form.create__form');
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

if (userId) {
  getById(userId).then((user) => {
    formElement.f_name.value = user.f_name;
    formElement.l_name.value = user.l_name;
    formElement.email.value = user.email;
    formElement.presentation.value = user.presentation;
  });
}

function updateUser(event) {
  //prevent default behavior of the submit button (reload page)
  event.preventDefault();
  //create user object from values in the form's input fields.
  const user = {
    id: userId,
    f_name: formElement.f_name.value,
    l_name: formElement.l_name.value,
    email: formElement.email.value,
    presentation: formElement.presentation.value
  };

  //call the api-function "update" and pass along the user object.
  update(user)
    .then((result) => {
      console.log(result);
      //if all went well, redirect to read.html
      window.location.href = '/read.html';
    })
    .catch((error) => {
      //if something went wrong, print out the error.
      console.log(error);
    });
}
