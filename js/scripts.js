document.addEventListener('DOMContentLoaded', function () {
    // Contact form validation (if it exists on the contact page)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const nameField = document.querySelector('#name');
            const emailField = document.querySelector('#email');
            const messageField = document.querySelector('#message');

            if (nameField.value.trim() === '') {
                alert('Please enter your name.');
                event.preventDefault();
            } else if (emailField.value.trim() === '') {
                alert('Please enter your email.');
                event.preventDefault();
            } else if (messageField.value.trim() === '') {
                alert('Please enter a message.');
                event.preventDefault();
            }
        });
    }

    // Interactivity for the shop page dropdown
    const categoryDropdown = document.querySelector('#category');
    const beatsSection = document.querySelector('#beats');
    const merchandiseSection = document.querySelector('#merchandise');
    const drumkitsSection = document.querySelector('#drumkits');

    // Hide all sections by default
    beatsSection.style.display = 'none';
    merchandiseSection.style.display = 'none';
    drumkitsSection.style.display = 'none';

    // Event listener to show/hide sections based on dropdown selection
    categoryDropdown.addEventListener('change', function () {
        const selectedCategory = categoryDropdown.value;

        // Hide all sections initially
        beatsSection.style.display = 'none';
        merchandiseSection.style.display = 'none';
        drumkitsSection.style.display = 'none';

        // Show the corresponding section based on the dropdown selection
        if (selectedCategory === 'beats') {
            beatsSection.style.display = 'block';
        } else if (selectedCategory === 'merchandise') {
            merchandiseSection.style.display = 'block';
        } else if (selectedCategory === 'drumkits') {
            drumkitsSection.style.display = 'block';
        }
    });
});
