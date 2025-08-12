

const inputLogo = document.getElementById("shakernavigation");
const inputOverlay1 = document.getElementById("overlay1");
const inputOverlay2 = document.getElementById("overlay2");
const inputOverlay3 = document.getElementById("overlay3");
const inputOverlay4 = document.getElementById("overlay4");

function toggleOverlay(overlay) {
    let shakerActive = false;

    inputLogo.addEventListener("mouseenter", function () {
        shakerActive = true;
    })

    inputLogo.addEventListener("mouseleave", function () {
        // To check the actual section entry before disabling
        setTimeout(() => {
            shakerActive = false;
        }, 10);
    })

    overlay.addEventListener("mouseenter", function () {
        if (shakerActive) {
            overlay.style.opacity = "0";
        }
    })

    overlay.addEventListener("mouseleave", function () {
        overlay.style.opacity = "1";
    })
}


toggleOverlay(inputOverlay1);
toggleOverlay(inputOverlay2);
toggleOverlay(inputOverlay3);
toggleOverlay(inputOverlay4);