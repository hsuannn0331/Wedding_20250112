document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.querySelector('.info-button');
    const infoDiv = document.querySelector('.info');
    const closeButton = document.querySelector('.close-button');

    infoButton.addEventListener('click', function() {
        infoDiv.classList.add('show');
    });

    closeButton.addEventListener('click', function() {
        infoDiv.classList.remove('show');
    });
});
