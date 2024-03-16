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
  // Alternatively, you can manually append data to FormData
  // formData.append('name', document.querySelector('input[name="name"]').value);
  // formData.append('email', document.querySelector('input[name="email"]').value);
  // formData.append('message', document.querySelector('textarea[name="message"]').value);

  fetch('https://markvilludo.xyz/api/send-mail', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      // console.log(response); // Response from the Laravel backend
      alert('Successfully sent your message.')
      this.reset(); // 'this' refers to the form element
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Please check your input data, and try again!')
  });
});
