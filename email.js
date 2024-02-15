var emailShown = false;

function showHideEmail() {
    var emailElement = document.getElementById('email');
    if (emailShown) {
        emailElement.innerHTML = 'kafleypl@mail.uc.edu';
        emailShown = false;
    } else {
        emailElement.innerHTML = 'Show my email';
        emailShown = true;
    }
}
