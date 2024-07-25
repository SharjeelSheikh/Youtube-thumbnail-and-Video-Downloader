


function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);

    if (!videoId) {
        document.getElementById('message').innerText = 'Invalid YouTube URL.';
        return;
    }

    const downloadUrl = `https://www.y2mate.com/youtube/${videoId}`;
    window.open(downloadUrl, '_blank');
}

function extractVideoId(url) {
    const regex = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regex);
    return (match && match[1].length === 11) ? match[1] : null;
}
