// Variables
const sendBtn = document.getElementById('send-btn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('reset-btn'),
    sendMailForm = document.getElementById('email-form');






// EventListners


evetListners();

function evetListners() {
    // App Init
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // Send email and reset button
    sendMailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);

}








// Function

// App Initialization
function appInit() {

    // Disable the send button on load
    sendBtn.style.backgroundColor = 'red';
}

function sendEmail(e){
     e.preventDefault();
    //  Show the spinners
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Show the img
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    // Hide spinner then show the send mail img
    setTimeout(function(){
        // Hide the spinners
        spinner.style.display = 'none';
        // Show the img
        document.querySelector('#loaders').appendChild(sendEmailImg);
        // After 5 second hide the image and reset the form
        setTimeout(function(){
            sendMailForm.reset();
            sendEmailImg.remove();
        }, 5000);
    }, 3000);
}

// Validate field

function validateField() {
    let errors;
    // Validate the length of the field
    validateLength(this);

    // Validate the email
    if (this.type === 'email') {
        validateEmail(this);
    }
    // Both will return errors, then check if there is any errors

    errors = document.querySelectorAll('.error');


    // Check that the inputs are not empty
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length === 0){
            // The button should be enabled
            sendBtn.style.backgroundColor = 'green';
        }
    }
}


// Validate the length of the field
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');

    }
}
// Validate email (checks for @ in the email value)
function validateEmail(field) {
    let mailText = field.value;
    if (mailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


// Reset form function
function resetForm(){
    sendMailForm.reset();
}