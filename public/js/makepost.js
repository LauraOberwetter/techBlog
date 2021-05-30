//same logic as login.js --> generate form/card to input information
const makePostHandler = async (event) => {
    event.preventDefault();

// Collect values from the make-post form
const makePostTitle = document.querySelector('#make-post-title').value.trim();
const makePostBody = document.querySelector('#make-post-body').value.trim();

if (makePostTitle && makePostBody) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ makePostTitle, makePostBody }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, post to dashboard
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
.querySelector('.make-post-form')
.addEventListener('submit', makePostFormHandler);