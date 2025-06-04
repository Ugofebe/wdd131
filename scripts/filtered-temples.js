// Get current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;

// Hamburger menu functionality
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.textContent = hamButton.textContent === '☰' ? '✕' : '☰';
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
  {
    templeName: "Paris France Temple",
    location: "Boulevard Saint Antoine",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "images/paris-france-temple-2056-main.jpg"
    },
  {
    templeName: "Accra Temple",
    location: "Accra, Ghana",
    dedicated: "2003, December, 20",
    area: 17500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
  {
    templeName: "Bacolod Philippines Temple",
    location: "Bacolod Airport Access Road Phillipines",
    dedicated: "2019, October, 5",
    area: 26700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-24089-main.jpg"
  },
  // Add more temple objects here...
];

// DOM Elements
const templeGrid = document.querySelector('.temple-grid');
const navLinks = document.querySelectorAll('nav a');

// Function to create temple card
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.className = 'temple-card';

  // Parse dedication year for filtering
  const dedicateYear = parseInt(temple.dedicated.split(',')[0]);

  card.innerHTML = `
    <figure>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>${temple.templeName}</figcaption>
    </figure>
    <div class="temple-info">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    </div>
  `;
  
  // Add data attributes for filtering
  card.dataset.year = dedicateYear;
  card.dataset.area = temple.area;

  return card;
}

// Function to display temples
function displayTemples(filter = 'all') {
  templeGrid.innerHTML = '';

  temples.forEach(temple => {
    const card = createTempleCard(temple);
    const dedicateYear = parseInt(temple.dedicated.split(',')[0]);
    const area = temple.area;

    let shouldDisplay = true;
    
    switch(filter) {
      case 'old':
        shouldDisplay = dedicateYear < 1900;
        break;
      case 'new':
        shouldDisplay = dedicateYear > 2000;
        break;
      case 'large':
        shouldDisplay = area > 90000;
        break;
      case 'small':
        shouldDisplay = area < 10000;
        break;
    }

    if (filter === 'all' || shouldDisplay) {
      templeGrid.appendChild(card);
    }
  });
}

// Event listeners for navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = e.target.textContent.toLowerCase();
    displayTemples(filter);
  });
});

// Initialize
displayTemples();

// Footer updates
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;