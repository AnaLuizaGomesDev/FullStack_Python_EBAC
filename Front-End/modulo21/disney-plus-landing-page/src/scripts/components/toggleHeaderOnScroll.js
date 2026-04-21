export function toggleHeaderOnScroll() {
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY;

        if(currentPosition < heroHeight) {
            hideHeader();
        } else {
            showHeader();
        }
    })
}

function hideHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

window.toggleHeaderOnScroll = toggleHeaderOnScroll;