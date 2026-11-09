
import AOS from 'aos';

export function scrollAnimation() {
    const scrollDirection = document.querySelectorAll('.scroll--up a, .scroll--down a');

    scrollDirection.forEach(arrow => {
        arrow.addEventListener('click', e => {
            e.preventDefault();

            const targetId = arrow.getAttribute('href');
            if (!targetId || !targetId.startsWith('#')) return;

            const targetSection = document.getElementById(targetId.slice(1));
            if (!targetSection) return;

            const targetItem = targetSection.querySelector('.container');
            const animation = arrow.parentElement.classList.contains('scroll--up') ? 'fade-up' : 'fade-down';

            if(targetItem) {
                targetItem.setAttribute('data-aos', animation);
                AOS.refreshHard();
            }

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });  

            if (targetItem) {
                setTimeout(() => {
                    targetItem.style.transition = 'none'; 
                    targetItem.classList.remove('aos-animate');
                    void targetItem.offsetWidth;
                    targetItem.style.transition = '';

                    requestAnimationFrame(() => {
                        targetItem.classList.add('aos-animate');
                    });
                }, 200);
            }
        });
    });
}
