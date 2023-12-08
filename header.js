// find user logged by the emailLogged from localStorage
const emailLogged = JSON.parse(localStorage.getItem("emailLogged"));
const users = JSON.parse(localStorage.getItem("users")) || [];

const userLogged = users.find((user) => {
  return user.email === emailLogged;
});

const isLogged = userLogged ? true : false;

const handleSignOut = () => {
  localStorage.removeItem("emailLogged");
  window.location.href = "./index.html";
};

// common content of header
let headerContent = `
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3"
  >
    <a
      href="/"
      class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    >
      <img
        src="https://cdn.cellphones.com.vn/media/logo/logo-cps-full-2.png"
        alt=""
        width="200px"
      />
    </a>

    <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
      <li><a href="#" class="nav-link px-2 link-danger">Home</a></li>
      <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
      <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
      <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
      <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
    </ul>
`;

// content depends on whether the user is logged in or not
// you can modify this content to fit your needs. This is just an example
// HINT: let write this on HTML first, then copy correct section into here
if (isLogged) {
  const fullName = userLogged.fullName;
  headerContent += `
    <div class="col-md-3 text-end">
      <div class="dropdown">
        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Xin chào ${fullName}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#" onclick="handleSignOut()">Đăng xuất</a></li>
        </ul>
      </div>
    </div>
  `;
} else {
  headerContent += `
    <div class="col-md-3 text-end">
      <a type="button" class="btn btn-outline-danger me-2" href="./sign-in.html">
        Đăng nhập
      </a>
      <a type="button" class="btn btn-danger" href="./sign-up.html">Đăng ký</a>
    </div>
  `;
}

// closing header tag
headerContent += `
  </header>
`;

document.getElementById("header-container").innerHTML = headerContent;
