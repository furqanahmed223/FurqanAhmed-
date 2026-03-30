// Portfolio Videos Data - Update with your video URLs
const portfolioVideos = [

    {
        id: 2,
        title: "High Quality Gaming Edit",
        category: "Gaming Video",
        thumbnail: "thumbnail.png",
        videoUrl: "hussain gaming video.mp4", // Replace with your video file URL
        description: "  Gaming video with motion graphics and sound design"
    },
    {
        id: 3,
        title: "Motion Graphics Explainer Reel",
        category: "Motion Graphics Reel",
        thumbnail: "thumbnail 2.png",
        videoUrl: "FINAL PROJECT.mp4", // Replace with your video file URL
        description: "Professional explainer animation with voiceover"
    },
    {
        id: 4,
        title: "Faceless Video Editing",
        category: "FacelessVideo Editing",
        thumbnail: "ideogram img.jpg",
        videoUrl: "asim clinte video . 1.mp4", // Replace with your video file URL
        description: "Smooth character animation and motion design"
    },
    {
        id: 5,
        title: "Simple Motion Graphics",
        category: "Motion Grapics",
        thumbnail: "motion graphics.PNG",
        videoUrl: "taj final video.mov", // Replace with your video file URL
        description: "Epic gaming highlights with sound design"
    },

];

// DOM Elements
const portfolioGrid = document.getElementById('portfolioGrid');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const loader = document.getElementById('loader');

// Initialize Portfolio
function initPortfolio() {
    portfolioGrid.innerHTML = '';

    portfolioVideos.forEach((video, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <div class="video-container">
                <img src="${video.thumbnail}" alt="${video.title}" class="portfolio-thumbnail">
                <video class="portfolio-video" controls preload="none">
                    <source src="${video.videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="portfolio-overlay">
                <h3 class="portfolio-title">${video.title}</h3>
                <p class="portfolio-category">${video.category}</p>
            </div>
        `;

        const thumbnail = portfolioItem.querySelector('.portfolio-thumbnail');
        const videoElement = portfolioItem.querySelector('.portfolio-video');
        const playButton = portfolioItem.querySelector('.play-button');

        // Click handler for thumbnail/play button
        const playVideo = () => {
            thumbnail.style.display = 'none';
            playButton.style.display = 'none';
            videoElement.style.display = 'block';
            videoElement.play();
        };

        thumbnail.addEventListener('click', playVideo);
        playButton.addEventListener('click', playVideo);

        // When video ends, show thumbnail again
        videoElement.addEventListener('ended', () => {
            videoElement.style.display = 'none';
            thumbnail.style.display = 'block';
            playButton.style.display = 'flex';
        });

        portfolioGrid.appendChild(portfolioItem);

        // Trigger animation
        setTimeout(() => {
            portfolioItem.classList.add('animate');
        }, index * 100);
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active Nav Link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll Navigation
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Hamburger Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Hide Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.style.transition = 'all 0.5s ease';
    }, 1500);
});

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
});
