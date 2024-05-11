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
    if (!isDarkMode) {
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

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Send form data to server
    fetch('https://node-api-sending-email.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send email');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message); // Alert the response message
        console.log('Email sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending email:', error.message);
        if (error instanceof TypeError) {
            alert('Error: Network error. Please try again later.');
        } else {
            alert('Error: Failed to send email. Please check your inputs.');
        }
    });
});

