let movieImages = [
    'https://via.placeholder.com/500x300/FF5733/ffffff?text=Movie+1',
    'https://via.placeholder.com/500x300/33FF57/ffffff?text=Movie+2',
    'https://via.placeholder.com/500x300/3357FF/ffffff?text=Movie+3',
    'https://via.placeholder.com/500x300/33FF57/ffffff?text=Movie+2',
    'https://via.placeholder.com/500x300/33FF57/ffffff?text=Movie+2',


];
let currentIndex = 0;
let isPlaying = true;
let slideshowInterval;
document.getElementById('currentImage').src = movieImages[currentIndex];
function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 2000);
}
function nextImage() {
    currentIndex = (currentIndex + 1) % movieImages.length;
    document.getElementById('currentImage').src = movieImages[currentIndex];
}
function prevImage() {
    currentIndex = (currentIndex - 1 + movieImages.length) % movieImages.length;
    document.getElementById('currentImage').src = movieImages[currentIndex];
}
function togglePlayPause() {
    if (isPlaying) {
        clearInterval(slideshowInterval);
        document.getElementById('playPauseBtn').textContent = 'Play';
    } else {
        startSlideshow();
        document.getElementById('playPauseBtn').textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function addImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const imagePosition = parseInt(document.getElementById('imagePosition').value);
 
   if (imageUrl && imagePosition >= 0 && imagePosition <= movieImages.length) {
        movieImages.splice(imagePosition, 0, imageUrl);
        alert('Image added successfully!');
    } else {
        alert('Please enter a valid URL and position.');
    }
}

document.getElementById('nextBtn').addEventListener('click', nextImage);
document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
document.getElementById('addImageBtn').addEventListener('click', addImage);

startSlideshow();