// Simple form validation and response handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-response').innerHTML = `
            <p>Thank you, ${name}! Your message has been sent.</p>
        `;
    } else {
        document.getElementById('form-response').innerHTML = `
            <p>Please fill in all fields.</p>
        `;
    }
});
