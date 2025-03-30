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