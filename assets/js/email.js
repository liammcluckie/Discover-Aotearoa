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
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("fail", error);
        }
    );
    document.getElementById("contact-form").reset();
    return false;
}