const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

const wrapper1 = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const body = document.body; // Select the body element

// Function to handle form submission
function submitForm() {
    wrapper1.classList.remove('active-popup');
}

// Function to open the login page
function openLoginPage() {
    wrapper1.classList.add('active-popup');
}

// Automatically open the login page after 5 seconds
setTimeout(openLoginPage, 9000);

registerLink.addEventListener('click', () => {
    wrapper1.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper1.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    openLoginPage();
});

iconClose.addEventListener('click', () => {
    wrapper1.classList.remove('active-popup');
});

function submitForm() {
    var userEmail = document.getElementById('login_email').value;

            // Get the first letter of the email
            var initial = userEmail.charAt(0).toUpperCase();

            // Create a profile picture element with the user's initial
            var profilePicture = document.getElementById('profilePicture');
            profilePicture.textContent = initial;
            profilePicture.style.display = 'flex';  
            profilePicture.style.backgroundColor = '#007870';  
            profilePicture.style.borderRadius = '50%';  
            profilePicture.style.width = '45px';  
            profilePicture.style.height = '45px';
            profilePicture.style.color = 'white'; 
            profilePicture.style.alignItems = 'center';
            profilePicture.style.justifyContent = 'center';
            profilePicture.style.fontSize = '1.2em'

            // Hide the login button
            var loginButton = document.querySelector('.btnLogin-popup');
            loginButton.style.display = 'none';
}


// Select the form element and add a submit event listener
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the submitForm function when the form is submitted
    submitForm();
});

