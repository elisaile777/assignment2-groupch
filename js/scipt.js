
=====================================
   T-COUDE CONTACT FORM
   JavaScript Email Method #2
=====================================

document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      // Prevent the page from refreshing
      event.preventDefault();

      // Get the visitor's information
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value.trim();

      // Prepare the email subject and body
      const emailSubject = encodeURIComponent(subject);

      const emailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
      );

      // Create the email link
      const emailLink =
        "mailto:hello@examplewebsite142.com" +
        "?subject=" + emailSubject +
        "&body=" + emailBody;

      // Open the visitor's email application
      window.location.href = emailLink;

    });

  }

});