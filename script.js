document.addEventListener('DOMContentLoaded', function(){
    // targeting each form containers 
    const signUpContainer = document.getElementById('sign-up-container');
    const signUpCon = document.getElementById('sign-up-con');
    const signUpContain = document.getElementById('sign-up-contain');
    // targeting buttons 
    const nextPageButton = document.getElementById('btn-next');
    const prevPageButton = document.getElementById('btn-prev-sec');
    const nextDetailsButton = document.getElementById('btn-nextt');
    const prevButton = document.getElementById('btn-prev-third');
    const submitButton = document.getElementById('btn-submit')

    // functions of each buttons for form navigation
    nextPageButton.addEventListener('click', function(){
        // when the first next button is clicked, next page displays 
        signUpContainer.style.display = 'none';
        signUpCon.style.display = 'block';
    });

    prevPageButton.addEventListener('click', function(){
        signUpCon.style.display = 'none';
        signUpContainer.style.display = 'block';

    });

    nextDetailsButton.addEventListener('click', function(){
        signUpCon.style.display = 'none';
        signUpContain.style.display = 'block';
        
    });
    prevButton.addEventListener('click', function(){
        signUpContain.style.display = 'none';
        signUpCon.style.display = 'block';
    });

    submitButton.addEventListener('click', function(){
        signUpContain.style.display = 'none';
        signUpContainer.style.display = 'block';
    });



});