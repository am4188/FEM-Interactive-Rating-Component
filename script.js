const buttons = document.getElementById('rating-buttons');
const submit = document.querySelector('.submit');

const firstContainer = document.querySelector('.first-container');
const secondContainer = document.querySelector('.second-container');

submit.addEventListener('click', function() {
    firstContainer.style.display = "none";
    secondContainer.style.display = "flex";
    const rating = document.querySelector('input[name="rating"]:checked').value
    document.getElementById('rating').innerHTML = rating;
    

});

