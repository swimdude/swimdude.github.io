function toggleMenu() {
    //targeting the menu-links element
    const menu = document.querySelector(".menu-links"); 
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}
