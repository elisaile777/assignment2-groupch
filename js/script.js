
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value;
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please complete all required fields.");
      return;
    }

    const emailSubject = "T-Coude Contact: " + subject;

    const emailBody =
      "Hello T-Coude!\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Subject: " + subject + "\n\n" +
      "Message:\n" + message;

    const mailtoLink =
      "mailto:hello@examplewebsite142.com" +
      "?subject=" + encodeURIComponent(emailSubject) +
      "&body=" + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
  });
});
