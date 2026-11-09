import AOS from 'aos';
import 'aos/dist/aos.css';

import {countDown} from './modules/countdown.js';
import { scrollAnimation } from './modules/scrollAnimation.js';

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    }); 
    countDown();
    scrollAnimation();
});