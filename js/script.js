/* ------------------------ Typing Animation ---------------------- */


// var typed = new Typed(".typing",{
//     strings:["Student", "Tech Enthusiast", "Fast Learner"],
//     typeSpeed:20,
//     BackSpeed:40,
//     loop:true
// })


// Active Toggle
var navLinks = document.querySelectorAll(".aside .nav li a");
function setHomeActive() {
    removeActiveClass(); // Remove active class from all links
    navLinks[0].classList.add("active"); // Add active class to Home
}
// Add click event listener to each link
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
    // Remove active class from all links
    navLinks.forEach(function(l) {
        l.classList.remove("active");
    });

    // Add active class to the clicked link
    this.classList.add("active");
    });
});

var sendEmailButton = document.getElementById("sendEmailButton");

// Add click event listener to the button
sendEmailButton.addEventListener("click", function() {
    // Call the sendEmail function
    sendEmail();
});

// Function to send email
function sendEmail() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var subject = document.getElementById("subjectInput").value;
    var message = document.getElementById("messageInput").value;

    var to = "pearlkhatri24@gmail.com";

    var body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Subject: " + subject + "\n";
    body += "Message: " + message;

    var mailtoUrl = "mailto:" + encodeURIComponent(to) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoUrl;
}
