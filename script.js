// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const membership = document.getElementById('membership');
    const message = document.getElementById('message');
    
    // Reset errors
    clearErrors();
    
    // Validation flags
    let isValid = true;
    
    // Validate name
    if (!name.value.trim()) {
      showError(name, 'Name is required');
      isValid = false;
    }
    
    // Validate email
    if (!email.value.trim()) {
      showError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, 'Please enter a valid email');
      isValid = false;
    }
    
    // Validate membership selection
    if (!membership.value) {
      showError(membership, 'Please select a membership interest');
      isValid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
      showError(message, 'Message is required');
      isValid = false;
    }
    
    // If form is valid, submit it
    if (isValid) {
      // In a real application, you would send the form data to a server here
      // For this example, we'll just show a success message
      showSuccess('Thank you for your message! We will contact you soon.');
      contactForm.reset();
    }
  });
}

// Show error message
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  formGroup.appendChild(errorElement);
  
  // Add error class to input
  input.classList.add('error');
}

// Clear all error messages
function clearErrors() {
  document.querySelectorAll('.error-message').forEach(element => {
    element.remove();
  });
  
  document.querySelectorAll('.error').forEach(element => {
    element.classList.remove('error');
  });
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show success message
function showSuccess(message) {
  const successElement = document.createElement('div');
  successElement.className = 'success-message';
  successElement.textContent = message;
  
  // Insert after form title
  const formTitle = document.querySelector('.contact-form h3') || document.querySelector('.contact-form');
  formTitle.parentNode.insertBefore(successElement, formTitle.nextSibling);
  
  // Remove success message after 5 seconds
  setTimeout(() => {
    if (successElement.parentNode) {
      successElement.remove();
    }
  }, 5000);
}

// Add animation to elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
  // Feature animation
  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Service card animation
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Pricing card animation
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Testimonial animation
  const testimonials = document.querySelectorAll('.testimonial');
  testimonials.forEach((testimonial, index) => {
    testimonial.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate when they come into view
  document.querySelectorAll('.feature, .service-card, .pricing-card, .testimonial').forEach(element => {
    observer.observe(element);
  });
});

// Add scroll event listener for navbar background change
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Add animation classes to CSS for elements that come into view
const style = document.createElement('style');
style.textContent = `
  .feature, .service-card, .pricing-card, .testimonial {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .feature.animated, .service-card.animated, .pricing-card.animated, .testimonial.animated {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Add pulse animation to hero buttons
document.addEventListener('DOMContentLoaded', function() {
  const heroButtons = document.querySelectorAll('.hero-buttons .btn');
  heroButtons.forEach(button => {
    button.classList.add('pulse');
  });
});