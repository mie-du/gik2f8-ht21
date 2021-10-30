function userCreate(event) {
  event.preventDefault();
  let form = document.querySelector('.create__form');
  const data = {
    f_name: form.f_name.value,
    l_name: form.l_name.value,
    email: form.email.value
  };
  console.log(data);
}
