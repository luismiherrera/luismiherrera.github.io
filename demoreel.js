const videos = [
    'https://player.vimeo.com/video/265463857?h=b864f269bf&title=0&byline=0&portrait=0',
    'https://player.vimeo.com/video/138778088?h=b864f269bf&title=0&byline=0&portrait=0',
    'https://player.vimeo.com/video/311204270?=b864f269bf&title=0&byline=0&portrait=0',
];

let currentVideoIndex = 0;

function updateVideo() {
    const iframe = document.getElementById('video-frame');
    iframe.src = videos[currentVideoIndex];
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
}
