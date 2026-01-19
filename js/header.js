
const headerHTML = `
  <nav class="navbar navbar-light navbar-expand-lg py-4">
    <a href="index.html" class="navbar-brand">
        <h1 class="text-primary fw-bold mb-0">Dr Sanchita <span class="text-dark">Gera</span> </h1>
    </a>
    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars text-primary"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto">
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="about.html" class="nav-item nav-link">About Us</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Notes/eBooks</a>
                <div class="dropdown-menu bg-light">
                    <a href="book.html" class="dropdown-item">Free</a>
                    <a href="blog.html" class="dropdown-item">Paid</a>
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tutorials</a>
                <div class="dropdown-menu bg-light">
                    <a href="book.html" class="dropdown-item">For Dentists</a>
                    <a href="blog.html" class="dropdown-item">For General Public</a>
                </div>
            </div>        
            <a href="contact.html" class="nav-item nav-link">Contact Us</a>
        </div>
        <!-- <button class="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search"></i></button> -->
        <a href="" class="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill">Book Now</a> 
    <!-- </div> -->
</nav>
`


document.getElementById("header").innerHTML = headerHTML;
