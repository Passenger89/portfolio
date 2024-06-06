document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

/* NAVIGATION */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.nav__toggle');
    const navLinks = document.querySelector('.nav__links');
    const navLinksList = document.querySelectorAll('.nav__links a');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Add event listener to each nav link
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Remove active class
      });
    });
  });

/* FORM */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact__form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        if (!nameInput.value.trim()) {
            showError(nameInput, 'Please enter your name.');
            isValid = false;
        } else {
            hideError(nameInput);
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        } else {
            hideError(emailInput);
        }

        if (!messageInput.value.trim()) {
            showError(messageInput, 'Please enter your message.');
            isValid = false;
        } else {
            hideError(messageInput);
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.contact__error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.style.display = 'none';
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});