function createUser(form_data) {
  const response = fetch('https://rest-small.herokuapp.com/user', {
    method: 'post',
    body: form_data,
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
}

function validateFormData(obj) {
  const arr = Object.values(obj);
  return arr.indexOf('') >= 0;
}

function submitUser() {
  const createBtn = document.querySelector('.create__form button[type=submit]');
  createBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let form_data = {
      f_name: document.querySelector('#f_name').value,
      l_name: document.querySelector('#l_name').value,
      email: document.querySelector('#email').value,
    };

    if (validateFormData(form_data) === false) {
      form_data = JSON.stringify(form_data);
      createUser(form_data).then(function () {
        location.replace(readURL);
      });
    } else {
      alert('Fill in all fields!');
      location.reload();
    }
  });
}

submitUser();
