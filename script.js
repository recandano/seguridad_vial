document.addEventListener('DOMContentLoaded', function () {
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

