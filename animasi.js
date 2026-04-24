// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
});

// LIGHTBOX
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}