function addUser(event) {
  event.preventDefault();
  let form = document.querySelector('.create__form');
  //Validation
  const data = {
    email: form.email.value,
    f_name: form.f_name.value,
    l_name: form.l_name.value
  };

  create(data);
}
