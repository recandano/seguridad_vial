document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card[data-modal]');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modals = document.querySelectorAll('.modal-backdrop .modal');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Hide all modals
            modals.forEach(m => m.style.display = 'none');
            // Show backdrop
            modalBackdrop.style.display = 'flex';
            // Show the selected modal
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        });
    });
    // Close buttons
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                modal.style.display = 'none';
                modalBackdrop.style.display = 'none';
            });
        }
    });
    // Optional: close modal when clicking outside
    modalBackdrop.addEventListener('click', function(e) {
        if (e.target === modalBackdrop) {
            modals.forEach(m => m.style.display = 'none');
            modalBackdrop.style.display = 'none';
        }
    });
});

