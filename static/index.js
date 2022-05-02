// Collapse nav bar on click (mobile view)
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

// Parallax effect
const parallax = document.querySelector('.backgroundIMG');
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx) {
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * -0.7 + 'px';
    })
})
// Show 'scroll back to top' button after a certain amount of scrolling '
document.addEventListener('scroll', () => {
    scrollVisibility();
})

const scroll = document.querySelector('.scrollup');

scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

const scrollVisibility = () => {
    if (window.scrollY > 400) {
        scroll.style.visibility = 'visible';
    }
    else {
        scroll.style.visibility = 'hidden';
    }
}

// Scroll section to any view (e.g: about section)
function scrollSection (view) {

    document.getElementById(view).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
}