// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const header = document.querySelector('header');
  
    // Add scroll event for header blur effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Custom validation function for phone number
    function validatePhoneNumber(input) {
      const phonePattern = /^\d{10}$/;
      return phonePattern.test(input.value);
    }
  
    // Handle form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
  
      // Check validity of each field
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const contactNumber = document.getElementById('contactNumber');
      
  
      let formIsValid = form.checkValidity();
  
      if (!validatePhoneNumber(contactNumber)) {
        contactNumber.classList.add('is-invalid');
        formIsValid = false;
      } else {
        contactNumber.classList.remove('is-invalid');
      }
  
      // If the form is valid, show success message
      if (formIsValid) {
        successMessage.style.display = 'block';
        form.reset();
  
        // Fade out the success message after 5 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
  
      // Show validation feedback for all fields
      form.classList.add('was-validated');
    });
  });
  