// Header Start
const header = document.querySelector('header');

header.innerHTML = `
<a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
Menu
</a>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
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
  </div>
</div>
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
           <a class="btn btn-warning animate__animated animate__infinite animate__slower animate__zoomInRight"  href="register.html">Register</a>`}
        </div>
    </div>
</div>
</nav>
`;

if (document.querySelector('#logout')) {
    document.querySelector('#logout').onclick = ()=>{
        localStorage.setItem('login','false');
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



// AOS start
AOS.init();
