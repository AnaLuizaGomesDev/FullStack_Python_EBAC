export function initFAQ() {
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', toggleAnswer);
    }
}

function toggleAnswer(element) {
    const itemClass = 'faq__questions__item--is-open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(itemClass);
}

window.initFAQ = initFAQ;