function getUsers() {
  return fetch('https://rest-small.herokuapp.com/users/');
}

function userCard(user) {
  let presentation = user.presentation;
  if (presentation.length > 85)
    presentation = presentation.substring(0, 85).concat('...');
  const card = `
                    <li class="card card-catalina-blue text-dark">
                        <a class="card-link card-link-catalina-blue" data-user="${user.id}" href="./update.html"><span title="Uppdatera ${user.f_name} ${user.l_name}">Uppdatera</span></a>
                        <span class="card-border card-border-left card-border-left-catalina-blue"></span>              
                        <span class="card-border card-border-top card-border-top-catalina-blue"></span>
                        <span class="card-border card-border-right card-border-right-catalina-blue"></span>
                        <span class="card-border card-border-bottom card-border-bottom-catalina-blue"></span>
                        <span class="card-fill"></span>
                        <div class="card-img">
                            <img class="card-img-base" src="./img/svg/profile.svg" alt="...">
                            <img class="card-img-color" src="./img/svg/profile_catalina-blue.svg" alt="...">
                            <img class="card-img-grad" src="./img/svg/profile_catalina-blue-grad.svg" alt="...">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title card-title-razzmatazz">${user.f_name} ${user.l_name}</h5>
                            <p class="card-text">${presentation}</p>
                        </div>
                        <p class="card-text card-email card-email-persian-green"><a href="mailto:${user.email}" title="Mejla ${user.f_name} ${user.l_name}">${user.email}</a></p>
                    </li>
                `;
  return card;
}

function addUserCards(users) {
  const gallery = document.querySelector('.gallery');
  let output = '';
  users.forEach(function (user) {
    output += userCard(user);
  });
  gallery.insertAdjacentHTML('afterbegin', output);
}

function addEventsToCards() {
  const cardLinks = document.querySelectorAll('.card-link');
  cardLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      sessionStorage.setItem('user', e.currentTarget.getAttribute('data-user'));
      location.href = e.currentTarget.getAttribute('href');
    });
  });
}

function outputUsers() {
  getUsers()
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      addUserCards(response);
    })
    .then(function () {
      addEventsToCards();
    });
}
outputUsers();

/*
function nthItem(index, max) {
    return index % max + 1;
}

function addUserCards(users) {
    const gallery = document.querySelector(".gallery");
    let output = '';
    for (let i = 0; i < users.length; i++) {
        var n = nthItem(i, 4),
            color;

        switch (n) {
            case 1:
                color = "dark-tangerine";
                output += userCard(users[i], color);
                break;
            case 2:
                color = "catalina-blue";
                output += userCard(users[i], color);
                break;
            case 3:
                color = "razzmatazz";
                output += userCard(users[i], color);
                break;
            case 4:
                color = "persian-green";
                output += userCard(users[i], color);
                break;
        }
    }
    gallery.insertAdjacentHTML("afterbegin", output);
}
*/
