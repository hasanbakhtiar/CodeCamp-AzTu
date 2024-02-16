// Header Start
const header = document.querySelector('header');

header.innerHTML = `

<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container">

    <a class="navbar-brand" href="home.html">Best Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Products
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="products.html">All products</a></li>
                    <li><a class="dropdown-item" href="products.html?=men's clothing">Men's clothing</a></li>
                    <li><a class="dropdown-item" href="products.html?=women's clothing">Women's clothing</a></li>
                    <li><a class="dropdown-item" href="products.html?=jewelery">Jewelery</a></li>
                    <li><a class="dropdown-item" href="products.html?=electronics">Electronics</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="service.html">Services</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
        </ul>
        <div class="d-flex">
     
        ${localStorage.getItem('login') === "true" ? ` <a class="btn  me-3" href="#">${localStorage.getItem("fullname")}</a>
        <a class="btn btn-danger" id="logout">Log out</a>` : ` <a class="btn btn-outline-dark me-3" href="login.html">Login</a>
        <a class="btn btn-warning me-3"  href="register.html">Register</a>`}
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary position-relative me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="fa-solid fa-cart-shopping"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
    
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-outline-danger "><i class="fa-solid fa-heart-pulse"></i></button>
        </div>

        
    </div>
</div>
</nav>




`;

if (document.querySelector('#logout')) {
    document.querySelector('#logout').onclick = () => {
        localStorage.setItem('login', 'false');
        window.location.assign('login.html')
    }
}
// Header End

// =================================================================

// Footer Start
const footer = document.querySelector('footer');
footer.innerHTML = `
<ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="../index.html" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link px-2 text-body-secondary">About</a></li>
            <li class="nav-item"><a href="service.html" class="nav-link px-2 text-body-secondary">Service</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-body-secondary">Contact</a></li>
            <li class="nav-item"><a href="register.html" class="nav-link px-2 text-body-secondary">Register</a></li>
        </ul>
        <p class="text-center text-body-secondary">©
            <script>document.write(new Date().getFullYear());</script> Best Shop, Inc
        </p>
`;
// Fooetr End

// =================================================================

setTimeout(()=>{
        document.querySelector('.pre-loader').style.display = "none";
        document.querySelector('.main-page').style.display = "block";
},1500);


// var place = document.querySelector(".followMouse");
// place.style.position = "absolute";
// place.style.color = "red";
// place.style.top="10px";
// place.style.fontSize = "15px";
// place.style.zIndex = "999";
// window.onmousemove = function(event) {
//             place.style.left = event.clientX + 'px';
//             place.style.top = event.clientY + 'px';
// }

// AOS start
AOS.init();

