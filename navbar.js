const toggleButton = document.getElementsByClassName('burger')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const body = document.getElementsByClassName('page-container')[0];

body.addEventListener('click', () => {
    if(navbarLinks.classList.contains('active')){
        navbarLinks.classList.toggle('active')
    }
});

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});