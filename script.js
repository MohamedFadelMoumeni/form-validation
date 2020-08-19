const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMach = false;
//CHECK FOR FORM VALIDATION
function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = "Please fill out all fields";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
    }
    if (password1El.value === password2El.value) {
        passwordsMach = true;
        password1El.style.borderColor = "green";
        password1El.style.borderColor = "green";

    } else {
        passwordsMach = false;
        message.textContent = "Makr Sure passwords match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1El.style.borderColor = "red";
        password2El.style.borderColor = "red";
    }
    if (isValid && passwordsMach) {
        password1El.style.borderColor = "green";
        password2El.style.borderColor = "green";
        message.textContent = "Successfull Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}
//USER DATA
function formData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        password: form.password1.value,
        website: form.website.value
    }
    console.log(user);
}
function processForm(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMach) { }
    formData();
}
//Event Listener

form.addEventListener('submit', processForm);