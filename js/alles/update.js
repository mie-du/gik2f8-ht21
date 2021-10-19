function getUser() {
    const user_id = sessionStorage.getItem("user");
    return fetch(`http://127.0.0.1:8000/users/${user_id}/`);
}

function formContent(user) {
    const content = `
                    <input type="hidden" id="user_id" value="${user.id}">
                    <label class="mt-3" for="f_name">First name</label>
                    <input type="text" class="form-control" id="f_name" value="${user.f_name}">
                    <label class="mt-3" for="l_name">Last name</label>
                    <input type="text" class="form-control" id="l_name" value="${user.l_name}">
                    <label class="mt-3" for="email">Email</label>
                    <input type="email" class="form-control" id="email" value="${user.email}">
                    <label class="mt-3" for="presentation">Presentation</label>
                    <textarea class="form-control" id="presentation" name="presentation" rows="3" maxlength="512" value="">${user.presentation}</textarea>
                    `;

    return content;
}

function outputUser() {
    getUser()
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            const updateForm = document.querySelector(".update__form");
            const output = formContent(response);
            updateForm.insertAdjacentHTML("afterbegin", output);
        })
}

function updateUser(form_data) {
    const response = fetch("http://127.0.0.1:8000/users/", {
        method: "put",
        body: form_data,
        headers: { 'Content-Type': 'application/json' }
    });
    return response;
}

function submitUpdates() {
    const updateBtn = document.querySelector(".update__form button[type=submit]");
    updateBtn.addEventListener("click", function (e) {
        e.preventDefault();

        let form_data = {
            "id": document.querySelector("#user_id").value,
            "f_name": document.querySelector("#f_name").value,
            "l_name": document.querySelector("#l_name").value,
            "email": document.querySelector("#email").value,
            "presentation": document.querySelector("#presentation").value,
        };
        form_data = JSON.stringify(form_data);
        updateUser(form_data)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                location.replace(readURL);
            })
    });
}

outputUser();
submitUpdates();