document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active-link");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active-link");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skillSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".progress-line span");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                progressBars.forEach((bar) => {
                    const width = bar.parentElement.getAttribute("data-width");
                    bar.style.width = width;
                });
            }
        });
    }, { threshold: 0.1 });

    if (skillSection) {
        observer.observe(skillSection);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");
    const projectGrid = document.querySelector(".project-grid");
    
    projectItems.forEach(item => item.classList.add("show"));

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
  
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectGrid.style.opacity = "0";
            projectGrid.style.transform = "translateY(20px)";

            setTimeout(() => {
                projectItems.forEach((item) => {
                    if (filterValue === "all" || item.classList.contains(filterValue)) {
                        item.classList.remove("hide");
                        item.classList.add("show");
                    } else {
                        item.classList.remove("show");
                        item.classList.add("hide");
                    }
                });

                projectGrid.style.opacity = "1";
                projectGrid.style.transform = "translateY(0)"; 

            }, 300); 
        });
    });
});


function loadPreviews(images) {
    const container = document.getElementById("modalImageContainer");
    container.innerHTML = ""; 

    images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "preview-shot";
        img.alt = "Screenshot";
        img.onerror = function() { this.src = "assets-images/225x400?text=Error"; };
        container.appendChild(img);
    });
}

(function () {
    emailjs.init("1uwBN88Lg11QdQ890");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_snxcsab",
            "template_03cqupy",
            form
        ).then(function () {
            alert("Message sent successfully!");
            form.reset();
        }, function (error) {
            alert("Failed to send message!");
            console.log(error);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
 
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("active");
        } else {
            scrollToTopBtn.classList.remove("active");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});