// Mobile Menu Toggle
// const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
// const nav = document.querySelector('.nav');

// mobileMenuBtn.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuButton = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    menuButton.addEventListener('click', function() {
        // Toggle menu visibility
        nav.classList.toggle('active');
        
        // Toggle icons
        if (nav.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close menu when clicking on a link (for single page applications)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
});


// Testimonial Rotator
const testimonials = [
    {
        name: "Sarah J.",
        university: "Harvard University",
        quote: "Studiimate helped me reduce my study time by 40% while improving my grades."
    },
    {
        name: "Michael T.",
        university: "MIT",
        quote: "The syllabus-aligned answers are a game-changer. No more irrelevant information!"
    },
    {
        name: "Priya K.",
        university: "Stanford University",
        quote: "Finally an AI that understands exactly what I'm studying in class."
    }
];

let currentTestimonial = 0;
const testimonialElement = document.getElementById('testimonial');

function displayTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialElement.innerHTML = `
        <p>"${testimonial.quote}"</p>
        <div class="testimonial-author">
            <strong>${testimonial.name}</strong>
            <span>${testimonial.university}</span>
        </div>
    `;
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Rotate every 5 seconds
displayTestimonial();
setInterval(displayTestimonial, 5000);

// Sign Up Form Handling
const signupForm = document.getElementById('beta-signup-form');
const signupSuccess = document.getElementById('signup-success');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            university: document.getElementById('university').value,
            major: document.getElementById('major').value,
            signupDate: new Date().toISOString()
        };
        
        // Save to localStorage
        localStorage.setItem('betaSignup', JSON.stringify(formData));
        
        // Show success message
        signupForm.style.display = 'none';
        signupSuccess.style.display = 'block';
        
        // Reset form
        signupForm.reset();
    });
}

// Feature Tabs (for features.html)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Chat Demo (for demo.html)
const chatMessages = document.getElementById('chat-messages');
const userMessageInput = document.getElementById('user-message');
const sendBtn = document.getElementById('send-btn');
const topicCards = document.querySelectorAll('.topic-card');

if (chatMessages) {
    const demoResponses = {
        calculus: "The fundamental theorem of calculus connects differentiation and integration. Would you like me to explain this with an example?",
        biology: "Photosynthesis converts light energy to chemical energy in plants. I can break this down step-by-step if you'd like.",
        programming: "Object-oriented programming focuses on creating objects with data and methods. Would you like to see a JavaScript example?"
    };
    
    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function handleTopicSelect(topic) {
        addMessage('user', `I'd like to learn about ${topic}`);
        setTimeout(() => {
            addMessage('ai', demoResponses[topic]);
        }, 1000);
    }
    
    // Topic card click events
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            handleTopicSelect(topic);
        });
    });
    
    // Send button click event
    sendBtn.addEventListener('click', () => {
        const message = userMessageInput.value.trim();
        if (message) {
            addMessage('user', message);
            userMessageInput.value = '';
            
            // Simulate AI response
            setTimeout(() => {
                addMessage('ai', "I'm a demo AI. In the full app, I'd provide a detailed, syllabus-aligned response to your question.");
            }, 1000);
        }
    });
    
    // Allow Enter key to send message
    userMessageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
}



// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
// document.getElementById('currentyear').textContent = new Date().getFullYear();
