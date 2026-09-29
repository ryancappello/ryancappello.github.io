// ---------------------------------------
// MOBILE NAVIGATION
// ---------------------------------------

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close mobile menu when a navigation link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ---------------------------------------
// SCROLL REVEAL
// ---------------------------------------

const revealElements = document.querySelectorAll(
    ".about-grid, .section-title-row, .experience-item, .info-card, .service-item, .detail-block"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// ---------------------------------------
// HERO PARALLAX EFFECT
// ---------------------------------------

const heroBackground = document.querySelector(".hero-background");


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroBackground.style.transform =
            `scale(1.02) translateY(${scrollPosition * 0.12}px)`;

    }

});


// ---------------------------------------
// ACTIVE NAVIGATION LINK
// ---------------------------------------

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});
