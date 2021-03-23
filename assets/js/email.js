//Validate contact form with success/error message

//Original code taken from CI learning material and customised for this project

//jshint esversion: 6

(function () {
    emailjs.init("user_7Zuhihp6HZgdp93yn7Cpc");
})();

function sendMail(contactForm) {
    emailjs.send("service_vg6mnxa", "aotearoa", {
        "from_name": contactForm.fname.value,
        "from_email": contactForm.email.value,
        "contact_number": contactForm.phone.value,
        "destination": contactForm.destination.value,
        "start_date": contactForm.start_date.value,
        "end_date": contactForm.end_date.value,
        "booking_request": contactForm.message.value
    })
    .then(
        function success(event) {
            const success = document.getElementById("contact-success");
            success.style.display = "block";
            event.preventDefault();
            console.log("success");
        },
        function error(event) {
            const error = document.getElementById("contact-error");
            error.style.display = "block";
            event.preventDefault();
            console.log("fail");
        }
    );
    document.getElementById("contact-form").reset();
    return false;
}