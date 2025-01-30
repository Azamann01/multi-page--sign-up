document.addEventListener('DOMContentLoaded', function(){
    const signUpContainer = document.getElementById('sign-up-container');
    const nextPageButton = document.getElementById('btn-next');
    const nameDetails = document.getElementById('name-details-container');
    const prevPageButton = document.getElementById('btn-prev-sec');
    const nextDetailsButton = document.getElementById('btn-next');
    const contactDetails = document.getElementById('contact-details-container');

    // functions of each buttons
    nextPageButton.addEventListener('click', function(){
        // when the first next button is clicked, next page displays 
        signUpContainer.style.display = 'none';
        nameDetails.style.display = 'block';
    });

    prevPageButton.addEventListener('click', function(){
        nameDetails.style.display = 'none';
        signUpContainer.style.display = 'block';

    });

    nextDetailsButton.addEventListener('click', function(){
        signUpContainer.style.display = 'none';
        contactDetails.style.display = 'block';
    });


});