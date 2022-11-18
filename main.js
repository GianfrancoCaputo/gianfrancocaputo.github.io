let myPicture = document.querySelector('.pfp');
let changePicture = function() {
    myPicture.style.backgroundImage = 'url(/Users/gcaputo/Documents/Coding/Projects/Codecademy/portfolioWebPage/resources/images/pfp.png)';
    }
let returnPicture = function() {    
    myPicture.style.backgroundImage = 'url(/Users/gcaputo/Documents/Coding/Projects/Codecademy/portfolioWebPage/resources/images/pfp2.png)';
}
myPicture.onmousedown = changePicture;
myPicture.onmouseup = returnPicture;

