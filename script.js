function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Code to create animated typing effect
var typing = new Typed('.auto-typing', {
    strings: ["am a CSE undergraduate", "am a Tech Enthusiast", "want to design good solutions"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

// Make sure this code is placed at the end of your script.js file
function initHomeArrow() {
    const homeArrowBtn = document.getElementById("home-arrow");
    if (homeArrowBtn) {
        homeArrowBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.error("Home arrow button not found!");
    }
}

// Make sure the DOM is fully loaded before running
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomeArrow);
} else {
    initHomeArrow();
}