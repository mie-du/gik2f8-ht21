const userList = document.getElementById('user');

getAllJSON().then((users) => {
  //loop through the array of users
  users.forEach((user) => {
    //add each user to an option element
    const currentUserHTML = `
    <option value="${user.email}">
      ${user.f_name} ${user.l_name}
    </option>`;
    //add each option element to the select list
    userList.insertAdjacentHTML('beforeend', currentUserHTML);
  });
});

function deleteUser(event) {
  //prevent default behavior of the submit button (reload page)
  event.preventDefault();
  //create user object from values in the form's input fields.
  const user = {
    email: userList.value
  };

  //call the api-function "create" and pass along the user object.
  remove(user)
    .then((result) => {
      //if all went well, redirect to read.html
      window.location.href = '/read.html';
    })
    .catch((error) => {
      //if something went wrong, print out the error.
      console.log(error);
    });
}
