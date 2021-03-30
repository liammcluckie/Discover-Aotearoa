//jshint esversion: 6

//Original code taken from CI learning material and customised for this project
//Submit contact form function
(function () {
    emailjs.init("user_7Zuhihp6HZgdp93yn7Cpc");
})();

function sendMail(contactForm) {
    emailjs.send("service_vg6mnxa", "aotearoa", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "contact_number": contactForm.phone.value,
        "destination": contactForm.destination.value,
        "start_date": contactForm.start_date.value,
        "end_date": contactForm.end_date.value,
        "booking_request": contactForm.message.value
    })
    .then(
        function success() {
            const success = document.getElementById("contact-success");
            success.style.display = "block";
        }
    );
    document.getElementById("contact-form").reset();
    return false;
}

//Function to check that user input is valid
function validateForm() {
    event.preventDefault();
    //Get Form data
    const contactName = document.getElementById("name").value;
    const contactEmail = document.getElementById("email").value;
    const contactPhone = document.getElementById("tel").value;
    //Valid user input 
    const validCharacters = /^[a-zA-Z\s]*$/; //Regex's code taken from https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    const validPhone = /^\d{11}$/;
    //Store test in variables
    const correctName = validCharacters.test(contactName);
    const correctEmail = validEmail.test(contactEmail);
    const correctPhone = validPhone.test(contactPhone);
    //Check that tests match user input
    if (correctName && correctEmail && correctPhone) {
        const form = document.getElementById("contact-form");
        sendMail(form);
    } else {
        const error = document.getElementById("contact-error");
        error.style.display = "block";
    }
}