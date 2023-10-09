const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // const mediaStream is awaiting the user to assign which screen to share
        // then we pass that mediaStream as our source object, load data and play
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        console.log('whoops, catch error!', error)
    }
}

button.addEventListener('click', async () => {
    // Disable button when click
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});


// On Load
selectMediaStream();