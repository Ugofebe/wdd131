
// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;
const reviewCount = document.getElementById('reviewCount');

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    currentYear.textContent = new Date().getFullYear();
    
    // Set last modified date
    lastModified.textContent = document.lastModified;
    
    // Update and display review count
    updateReviewCount();
});

// Update review count in localStorage
function updateReviewCount() {
    let count = localStorage.getItem('reviewCount');
    
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    
    localStorage.setItem('reviewCount', count);
    reviewCount.textContent = `You have submitted ${count} reviews.`;
}