

// To enable tooltip for the home page
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function toggleMenu() {
    const pictureLaptop = document.getElementById("logoLaptop");
    const pictureMobile = document.getElementById("logoMobile");
    const coverAll = document.getElementById("backgroundOverlay");
    const menu = document.getElementById("navigation");

    function openMenu() {
        // When is clicked, the background covers everything and the pearls ease in from left to right
        coverAll.style.display = "block";
        menu.style.transform = "translateY(0)";

        // First show display: block, then on the next FRAME change opacity to 1 so the transition runs
        requestAnimationFrame(() => {
            coverAll.style.opacity = "1";
        });
    }

    // For laptop
    if (pictureLaptop) {
        pictureLaptop.addEventListener("click", openMenu);
    }

    // For mobile
    if (pictureMobile) {
        pictureMobile.addEventListener("click", openMenu);
    }

    /* Cannot use

        if (pictureLaptop) {

        } else {

        }

        because if pictureLaptop is false, it doesnt mean that the true would be pictureMobile; 
        pictureMobile is NOT the opposite word for pictureLaptop */
}

toggleMenu();