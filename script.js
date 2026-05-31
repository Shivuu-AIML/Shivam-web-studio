// =====================================
// SHIVAM WEB STUDIO
// MAIN SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // TYPEWRITER
    // ==========================

    const typingElement =
        document.getElementById("typing");

    const text =
        "Websites That Build Trust & Bring Customers";

    let index = 0;

    function typeWriter() {

        if (!typingElement) return;

        if (index < text.length) {

            typingElement.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeWriter, 40);
        }
    }

    typeWriter();


    // ==========================
    // SCROLL REVEAL
    // ==========================

    const hiddenElements =
        document.querySelectorAll(".hidden");

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    hiddenElements.forEach(el => {
        observer.observe(el);
    });


    // ==========================
    // NAVBAR SHOW / HIDE
    // ==========================

    const navbar =
        document.getElementById("navbar");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        let currentScroll =
            window.pageYOffset;

        if (
            currentScroll > lastScroll &&
            currentScroll > 100
        ) {

            navbar.style.transform =
                "translateY(-100%)";

        } else {

            navbar.style.transform =
                "translateY(0)";
        }

        lastScroll = currentScroll;

    });


    // ==========================
    // ACTIVE LINKS
    // ==========================

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                === `#${current}`
            ) {

                link.classList.add("active");
            }

        });

    });


    // ==========================
    // SMOOTH SCROLL
    // ==========================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",

                function (e) {

                    e.preventDefault();

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (target) {

                        target.scrollIntoView({
                            behavior:
                                "smooth"
                        });

                    }

                }

            );

        });


    // ==========================
    // BACK TO TOP
    // ==========================

    const backToTop =
        document.getElementById(
            "backToTop"
        );

    window.addEventListener(
        "scroll",

        () => {

            if (
                window.scrollY > 500
            ) {

                backToTop.style.opacity =
                    "1";

                backToTop.style.visibility =
                    "visible";

            } else {

                backToTop.style.opacity =
                    "0";

                backToTop.style.visibility =
                    "hidden";

            }

        }

    );

    if (backToTop) {

        backToTop.addEventListener(
            "click",

            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }

        );

    }


    // ==========================
    // COUNTERS
    // ==========================

    const counters =
        document.querySelectorAll(
            ".counter"
        );

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
                +counter.dataset.target;

            const current =
                +counter.innerText;

            const increment =
                Math.ceil(
                    target / 100
                );

            if (
                current < target
            ) {

                counter.innerText =
                    current + increment;

                setTimeout(
                    updateCounter,
                    20
                );

            } else {

                counter.innerText =
                    target;

            }

        };

        updateCounter();

    });


    // ==========================
    // FAQ
    // ==========================

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    faqItems.forEach(item => {

        item.addEventListener(
            "click",

            () => {

                item.classList.toggle(
                    "faq-open"
                );

            }

        );

    });


    // ==========================
    // DARK MODE
    // ==========================

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );

    const savedTheme =
        localStorage.getItem(
            "theme"
        );

    if (
        savedTheme === "light"
    ) {

        document.body.classList.add(
            "light-mode"
        );

    }

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",

            () => {

                document.body.classList.toggle(
                    "light-mode"
                );

                const currentTheme =
                    document.body.classList.contains(
                        "light-mode"
                    )

                        ? "light"

                        : "dark";

                localStorage.setItem(
                    "theme",
                    currentTheme
                );

            }

        );

    }


    // ==========================
    // HAMBURGER MENU
    // ==========================

    const hamburger =
        document.getElementById(
            "hamburger"
        );

    const navMenu =
        document.querySelector(
            ".nav-links"
        );

    if (
        hamburger &&
        navMenu
    ) {

        hamburger.addEventListener(
            "click",

            () => {

                navMenu.classList.toggle(
                    "mobile-active"
                );

            }

        );

    }


    // ==========================
    // PORTFOLIO FILTER
    // ==========================

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );

    const portfolioItems =
        document.querySelectorAll(
            ".portfolio-card"
        );

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",

            () => {

                const filter =
                    button.dataset.filter;

                portfolioItems.forEach(
                    item => {

                        if (
                            filter === "all"
                        ) {

                            item.style.display =
                                "block";

                        } else if (

                            item.classList.contains(
                                filter
                            )

                        ) {

                            item.style.display =
                                "block";

                        } else {

                            item.style.display =
                                "none";

                        }

                    }

                );

            }

        );

    });


    // ==========================
    // FOOTER YEAR
    // ==========================

    const year =
        document.getElementById(
            "year"
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    // ==========================
    // CONTACT FORM
    // ==========================

    const form =
        document.querySelector(
            "form"
        );

    if (form) {

        form.addEventListener(
            "submit",

            e => {

                e.preventDefault();

                const inputs =
                    form.querySelectorAll(
                        "input, textarea"
                    );

                let valid = true;

                inputs.forEach(
                    input => {

                        if (
                            input.value.trim() === ""
                        ) {

                            valid = false;

                            input.style.border =
                                "1px solid red";

                        } else {

                            input.style.border =
                                "";

                        }

                    }

                );

                if (valid) {

                    alert(
                        "Thank you! Your message has been sent."
                    );

                    form.reset();

                }

            }

        );

    }

});