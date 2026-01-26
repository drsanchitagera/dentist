const aboutHTML = `
<div class="container-fluid py-6 bg-light">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
                        <img src="img/dr_sanchita_ger.png" class="img-fluid rounded" alt="" height="400" width="500px">
                    </div>
                    <div class="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
                        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">About Us</small>
                        <h1 class="display-5 mb-4">Hi, I’m Dr. Sanchita Gera.</h1>
                        <p class="mb-4">Dentistry can feel overwhelming at any stage—whether you’re a BDS student, a fresh graduate, or a practicing clinician. I’ve stood exactly where many of you are—confused, questioning, and trying to find clarity beyond textbooks.</p>
<p class="mb-4">This space was created with a simple intention: to make dentistry feel less intimidating and more understandable. Through handwritten clinical notes, practical explanations, and evidence-based tutorials, I aim to bridge the gap between theory and real-life practice.</p>
<p class="mb-4">If even one note helps you feel more confident in the clinic or reassures you that you’re on the right path, then this platform has done what it was meant to do. 🦷🤍</p>
                        <a href="about.html" id="about_us_href" class="btn btn-primary py-3 px-5 rounded-pill">About Us<i class="fas fa-arrow-right ps-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
`
document.getElementById("about").innerHTML = aboutHTML;    