// assets/js/script.js
document.addEventListener('DOMContentLoaded', function () {
    const bgImages = [
        'bg1.webp',
        'bg2.webp',
        'bg3.webp',
        'bg4.webp',
        'bg5.webp',
        'bg6.webp',
        'bg7.webp',
        'bg8.webp',
        // Add more images as needed
    ];

    const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
    document.documentElement.style.setProperty('--bg-image', `url('../../assets/images/bg_images/${randomImage}')`);
});
