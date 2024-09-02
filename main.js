const video = document.getElementById('video');
const startCameraButton = document.getElementById('start-camera');
const takePhotoButton = document.getElementById('take-photo');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Start the camera when the button is clicked
startCameraButton.addEventListener('click', async () => {
    // Request camera access
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        takePhotoButton.style.display = 'block'; // Show the capture button
    } catch (err) {
        console.error('Error accessing the camera: ', err);
        alert('Failed to access the camera.');
    }
});

// Capture the photo when the button is clicked
takePhotoButton.addEventListener('click', () => {
    // Set the canvas size to match the video element
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a data URL (base64 image)
    const imageDataUrl = canvas.toDataURL('image/png');

    // Optionally, you can display or upload this imageDataUrl
    console.log('Captured image:', imageDataUrl);
});