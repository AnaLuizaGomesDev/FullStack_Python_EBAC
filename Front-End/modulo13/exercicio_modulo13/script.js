// Aguarda o DOM estar 100% carregado antes de rodar
document.addEventListener('DOMContentLoaded', function () {

    const navLinks = document.querySelectorAll('#menu a[data-tab]');
    const tabButtons = document.querySelectorAll('.nav-tabs .nav-link');
    const homeLinks = document.querySelectorAll('a[href="#home"], #logo-genshin');
    const tabPanes = document.querySelectorAll('.tab-pane');

    function updateMenuActive(targetId) {

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        homeLinks.forEach(link => {
            link.classList.remove('active');
        });

        const menuLink = document.querySelector(`#menu a[data-tab="${targetId}"]`);

        if (menuLink) {
            menuLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('data-tab');

            const tabButtonSelector = `.nav-tabs .nav-link[data-bs-target="${targetId}"]`;
            const tabButton = document.querySelector(tabButtonSelector);

            if (tabButton) {
                const tab = bootstrap.Tab.getOrCreateInstance(tabButton);
                tab.show();
            }
        });
    });

    tabButtons.forEach(btn => {
        btn.addEventListener('shown.bs.tab', function (e) {
            const targetId = e.target.getAttribute('data-bs-target');
            console.log(`Aba mostrada: ${targetId}`); 

            updateMenuActive(targetId);
        });
    });

    homeLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            tabButtons.forEach(btn => {
                btn.classList.remove('active')
            });
            tabPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
            })

            if (this.getAttribute('href') === '#home') {
                this.classList.add('active');
            }
        });
    });
}); 