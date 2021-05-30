//same logic as login.js --> generate form/card to input information
const makePostHandler = async (event) => {
    event.preventDefault();

// Collect values from the login form
const makePostTitle = document.querySelector('#email-login').value.trim();
const makePostBody = document.querySelector('#password-login').value.trim();