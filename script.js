const noBtn = document.getElementById('noBtn');
let bouncing = false;
const imageToShow = document.createElement('img');

// Configure the image element
imageToShow.src = 'giphy1.gif'; // Replace with the path to your image
imageToShow.style.display = 'none';
imageToShow.style.position = 'absolute';
imageToShow.style.left = '50%';
imageToShow.style.top = '50%';
imageToShow.style.transform = 'translate(-50%, -50%)'; // Center the image
document.body.appendChild(imageToShow);

noBtn.addEventListener('mouseover', () => {
    if (!bouncing) {
        bouncing = true;

        // Randomize button position
        noBtn.style.position = 'absolute';
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // Show image at the center of the screen
        imageToShow.style.display = 'block';

        setTimeout(() => {
            bouncing = false;
            noBtn.style.position = 'static';
            imageToShow.style.display = 'none';
        }, 1000);
    }
});
const yesBtn = document.getElementById('yesBtn');

yesBtn.addEventListener('click', () => {
    // Redirect to the thank you page after clicking "Yes"
    window.location.href = 'yes.html';
});
