const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

const toggleButton = document.getElementById('toggleMode');
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');

// Function to toggle between light and dark mode
toggleButton.addEventListener('click', () => {
    // Check if dark mode is active
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Toggle dark mode class on root element
    document.documentElement.classList.toggle('dark');

    // Toggle visibility of icons based on the mode
    if (isDarkMode) {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    } else {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this); // Create FormData object from the form
    fetch('https://markvilludo.xyz/api/send-mail', {
      method: 'POST',
      body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully.');
            alert('Successfully sent your message.');
            this.reset(); // Clear the form
        } else if (response.status === 422) {
            // Handle validation errors
            response.json().then(data => {
                const errors = data.errors;
                let errorMessage = '';
                for (const field in errors) {
                    errorMessage += `${field}: ${errors[field].join(', ')}\n`;
                }
                alert(errorMessage);
            });
        } else {
            console.error('Server error:', response.statusText);
            alert('Failed to send email. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send email. Please try again later.');
    });
});
