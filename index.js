
document.addEventListener('DOMContentLoaded', () => {
    const fetchThumbnailButton = document.getElementById('fetchThumbnailButton');
    const videoUrlInput = document.getElementById('videoUrl');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const downloadLink = document.getElementById('downloadLink');

    fetchThumbnailButton.addEventListener('click', () => {
        const videoUrl = videoUrlInput.value.trim();
        const videoId = getVideoIdFromUrl(videoUrl);

        if (!videoId) {
            alert('Invalid YouTube URL');
            return;
        }

        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        const imgElement = document.createElement('img');
        imgElement.src = thumbnailUrl;
        imgElement.alt = 'YouTube Thumbnail';

        thumbnailContainer.innerHTML = ''; 
        thumbnailContainer.appendChild(imgElement);

        downloadLink.href = thumbnailUrl;
        downloadLink.download = `${videoId}_thumbnail.jpg`;
        downloadLink.textContent = 'Download Thumbnail';
        downloadLink.style.display = 'block';
    });

    function getVideoIdFromUrl(url) {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/(?:v|e(?:mbed)?)\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^"&?\/\s]{11})/;
        const matches = url.match(regex);
        return matches ? matches[1] : null;
    }
});




