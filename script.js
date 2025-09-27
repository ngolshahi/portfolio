function openLightbox(imageSrc, imageAlt) {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    lightbox.style.display = 'none';
}


const nameElement = document.getElementById('name');
const occupationElement = document.getElementById('occupation');
let nameText = "Nima Golshahi";
let occupationText = "Computer Science Student";
let index = 0;

function typeWriter() {
    if (index < nameText.length || index < occupationText.length) {
        if (index < nameText.length) {
            nameElement.innerHTML += nameText.charAt(index);
        }
        if (index < occupationText.length) {
            occupationElement.innerHTML += occupationText.charAt(index);
        }
        index++;
        setTimeout(typeWriter, 100);
    }
}

        
const aboutMeElement = document.getElementById('about-me-content');
const skipButton = document.getElementById('skip-animation');
let aboutMeText = "Versatile Computer Science student with a strong academic background and a keen interest in technology and finance. Equipped with a solid foundation in computer science, problem-solving abilities, and a thirst for innovation. My analytical thinking, attention to detail, and passion for research make me an asset in dynamic environments. Eager to apply my skills, learn, and contribute meaningfully to organizations seeking expertise in both computer science and finance.";
let aboutMeIndex = 0;
let isTyping = false;

function typeWriterAboutMe() {
    if (aboutMeIndex < aboutMeText.length && isTyping) {
        const char = aboutMeText.charAt(aboutMeIndex);
        aboutMeElement.innerHTML += char;
        aboutMeIndex++;
        
        const delay = char === ' ' ? 100 : 50;
        setTimeout(typeWriterAboutMe, delay);
    } else if (aboutMeIndex >= aboutMeText.length) {
        skipButton.style.display = 'none';
    }
}

function skipAnimation() {
    isTyping = false;
    aboutMeElement.innerHTML = aboutMeText;
    skipButton.style.display = 'none';
}

skipButton.addEventListener('click', skipAnimation);

// Function to show/hide page indicators
function showPageIndicator(pageNumber) {
    // Hide all page indicators
    document.querySelectorAll('.page-number').forEach(indicator => {
        indicator.classList.remove('active');
    });
    // Show the active one
    document.getElementById(`page-number${pageNumber === 1 ? '' : '-' + pageNumber}`).classList.add('active');
}

const homeLink = document.getElementById('home-link');
const aboutMeLink = document.getElementById('about-me-link');
const portfolioLink = document.getElementById('portfolio-link');
const homeSection = document.getElementById('home');
const aboutMeSection = document.getElementById('about-me');
const portfolioSection = document.getElementById('portfolio');
const contactLink = document.getElementById('contact-link');
const contactSection = document.getElementById('contact');

homeLink.addEventListener('click', () => {
    homeSection.style.animation = 'none';
    aboutMeSection.style.display = 'none';
    contactSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    homeSection.style.display = 'block';
    nameText = "Nima Golshahi"; 
    occupationText = "Software Engineer @ BNY"; 
    index = 0; 
    nameElement.innerHTML = ''; 
    occupationElement.innerHTML = ''; 
    typeWriter(); 
    showPageIndicator(1);
});

aboutMeLink.addEventListener('click', () => {
    homeSection.style.animation = 'none';
    homeSection.style.display = 'none';
    contactSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    aboutMeSection.style.display = 'block';
    aboutMeText = "Versatile Computer Science student with a strong academic background and a keen interest in technology and finance. Equipped with a solid foundation in computer science, problem-solving abilities, and a thirst for innovation. My analytical thinking, attention to detail, and passion for research make me an asset in dynamic environments. Eager to apply my skills, learn, and contribute meaningfully to organizations seeking expertise in both computer science and finance.";
    aboutMeIndex = 0;
    aboutMeElement.innerHTML = '';
    isTyping = true;
    skipButton.style.display = 'inline-block';
    typeWriterAboutMe(); 
    showPageIndicator(2);
});

portfolioLink.addEventListener('click', () => {
    homeSection.style.animation = 'none';
    homeSection.style.display = 'none';
    contactSection.style.display = 'none';
    aboutMeSection.style.display = 'none';
    portfolioSection.style.display = 'block';
    showPageIndicator(3);
});

contactLink.addEventListener('click', () => {
        homeSection.style.animation = 'none';
        homeSection.style.display = 'none';
        aboutMeSection.style.display = 'none';
        portfolioSection.style.display = 'none';
        contactSection.style.display = 'block';
        showPageIndicator(4);
});

        
window.onload = function () {
    typeWriter(); 
    showPageIndicator(1);
    setTimeout(() => {
        const homeElement = document.getElementById('home');
        homeElement.style.animation = 'glitch 1s linear infinite';
    }, 2000);
};
