// Product data array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// DOM elements
const productSelect = document.getElementById('productName');
// const currentYear = document.getElementById('currentyear');
// const lastModified = document.getElementById('lastModified');

// Populate product dropdown
function populateProducts() {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        option.rate = product.name;
        productSelect.appendChild(option);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
});
// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;