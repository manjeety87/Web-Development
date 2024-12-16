document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const contactForm = document.getElementById('contactForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
            } else {
                alert('Registration successful!');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
        });
    }

    
    const toggleMenu = () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    };

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    const addRow = document.getElementById('addRow');
    const tableBody = document.querySelector('#dataTable tbody');
    if (addRow && tableBody) {
        addRow.addEventListener('click', () => {
            tableBody.insertAdjacentHTML('beforeend', '<tr><td>New Name</td><td>0</td><td>Unknown</td></tr>');
        });
    }
});
