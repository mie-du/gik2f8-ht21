/* User.js
  HTML-code to represent a "User-object"

*/

function renderUser({ id, email, f_name, l_name, presentation }) {
  return `
  <li class="card card-catalina-blue text-dark">
      <a class="card-link card-link-catalina-blue" href="./update.html?id=${id}"><span title="Uppdatera ${f_name} ${l_name}">Uppdatera</span></a>
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
          <h5 class="card-title card-title-razzmatazz">${f_name} ${l_name}</h5>
          <p class="card-text">${presentation}</p>
      </div>
      <p class="card-text card-email card-email-persian-green"><a href="mailto:${email}" title="Mejla ${f_name} ${l_name}">${email}</a></p>
  </li>
`;
}
