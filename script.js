
//Coded this for Navbar links
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-icon');
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    menuIcon.classList.toggle('open');
});
const links = document.querySelectorAll('.nav-link')
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        menuIcon.classList.remove('open')
    })
})
