document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        firstName: document.getElementById("firstName")?.value || "",
        lastName: document.getElementById("lastName")?.value || "",
        email: document.getElementById("email")?.value || "",
        message: document.getElementById("message")?.value || "",
        formType: "contact"
    };

    const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
        alert("Message sent successfully!");
    } else {
        alert("There was an issue sending your message.");
    }
});

(function prefillFeedbackFromUrl() {
    const params = new URLSearchParams(window.location.search);
  
    if (params.get("feedback") !== "1") return;
  
    const messageField = document.getElementById("message");
    const prefilled = params.get("message");
  
    if (messageField && prefilled) {
      messageField.value = prefilled;
      messageField.focus();
    }
  })();