const videos = [
    'https://player.vimeo.com/video/265463857?h=b864f269bf&title=0&byline=0&portrait=0',
    'https://player.vimeo.com/video/138778088?h=b864f269bf&title=0&byline=0&portrait=0',
    'https://player.vimeo.com/video/311204270?=b864f269bf&title=0&byline=0&portrait=0',
];

let currentVideoIndex = 0;

function updateVideo() {
    const iframe = document.getElementById('video-frame');
    iframe.src = videos[currentVideoIndex];
    updateDots(); // Update dots whenever the video changes
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

// Create dots for each video
function createDots() {
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = ''; // Clear existing dots

    videos.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === currentVideoIndex) {
            dot.classList.add('active'); // Highlight the active dot
        }
        dot.addEventListener('click', () => {
            currentVideoIndex = index;
            updateVideo();
        });
        dotsContainer.appendChild(dot);
    });
}

// Update active dot
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentVideoIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize
createDots();
updateDots();
