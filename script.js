function sendMail(){
    event.preventDefault();

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,

    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;  
    }
    
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields before submitting.");
        return;  
    }

    emailjs.send("service_3ehmk9d", "template_zzxmzqq", parms)
    .then(function(response) {
        alert("Email Sent Successfully");
    }, function(error) {
        alert("Failed to send email. Please try again.");
    });

}
