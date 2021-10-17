function getUsers() {
    return fetch("http://127.0.0.1:8000/users/");
}

function userOption(user) {
    const userOption = `<option value="${user.email}">${user.f_name} ${user.l_name}</option>`;
    return userOption;
}

function outputUsers() {
    getUsers()
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            console.log(response);
            const options = document.querySelector("#user");
            let output = "";
            for (let i = 0; i < response.length; i++) {
                output += userOption(response[i]);
            }
            options.insertAdjacentHTML("afterbegin", output);
        })
}

function deleteUser(form_data) {
    const response = fetch("http://127.0.0.1:8000/users/", {
        method: "delete",
        body: form_data,
        headers: { 'Content-Type': 'application/json' }
    });
    return response;
}

function selectUser() {
    const delForm = document.querySelector(".del__form button[type=submit]");
    delForm.addEventListener("click", function(e) {
        e.preventDefault();

        let form_data = {
            "email": document.querySelector("#user").value,
        };
        form_data = JSON.stringify(form_data);
        deleteUser(form_data)
            .then(function() {
                location.reload();
            })
    });
}

outputUsers();
selectUser();