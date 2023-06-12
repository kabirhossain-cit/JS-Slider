var currentImage = 1;

// Get the active button index from localStorage on page load
window.addEventListener('load', function () {
    var activeButtonIndex = localStorage.getItem('activeButtonIndex');
    if (activeButtonIndex) {
        changeImage(activeButtonIndex);
    }
});

function changeImage(index) {
    var slider = document.querySelector('.slider');
    var images = document.querySelectorAll('.slider img');
    var buttons = document.querySelectorAll('button');

    // Remove the 'active' class from all images and buttons
    images.forEach(function (image) {
        image.classList.remove('active');
        
    });
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button and image
    buttons[index - 1].classList.add('active');
    images[index - 1].classList.add('active');

    // Store the active button index in localStorage
    localStorage.setItem('activeButtonIndex', index);
}