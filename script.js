document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector(".navbar nav");
    const navLinks = document.querySelectorAll(".navbar nav a");

    /*
    ========================================
    MOBILE MENU
    ========================================
    */

    menuBtn.addEventListener("click", function () {

        nav.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /*
    ========================================
    CLOSE MOBILE MENU
    ========================================
    */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /*
    ========================================
    ACTIVE NAVIGATION
    ========================================
    */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });


    /*
    ========================================
    SCROLL REVEAL
    ========================================
    */

    const revealElements = document.querySelectorAll(
        ".section, .service-card, .project-card, .skill"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

});
