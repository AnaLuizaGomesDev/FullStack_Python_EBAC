import { toggleHeaderOnScroll } from './components/toggleHeaderOnScroll.js';
import { initTabs } from './components/showsTabs.js';
import { initFAQ } from './components/faqQuestions.js';

document.addEventListener('DOMContentLoaded', function(){
    toggleHeaderOnScroll();
    initTabs();
    initFAQ();
})

