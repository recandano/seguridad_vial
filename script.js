document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad del menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Funcionalidad de modales (código original)
    const cards = document.querySelectorAll('.card[data-modal]');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modals = document.querySelectorAll('.modal-backdrop .modal');
    
    cards.forEach(card => {
        card.addEventListener('click', function () {
            modals.forEach(m => m.style.display = 'none');
            modalBackdrop.style.display = 'flex';

            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        });
    });

    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function (e) {
                modal.style.display = 'none';
                modalBackdrop.style.display = 'none';
            });
        }
    });

    modalBackdrop.addEventListener('click', function (e) {
        if (e.target === modalBackdrop) {
            modals.forEach(m => m.style.display = 'none');
            modalBackdrop.style.display = 'none';
        }
    });
});