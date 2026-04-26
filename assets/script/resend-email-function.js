document.getElementById("submit_form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    formData.scent = document.getElementById("scents")?.value || "";
    formData.quantity = document.getElementById("inputQuantity")?.value || "";

    formData.inputFirstName = document.getElementById("inputFirstName")?.value || "";
    formData.inputLastName = document.getElementById("inputLastName")?.value || "";
    formData.phoneNumber = document.getElementById("phoneNumber")?.value || "";
    formData.email = document.getElementById("email")?.value || "";
    formData.address = document.getElementById("address")?.value || "";
    formData.address2 = document.getElementById("address2")?.value || "";
    formData.city = document.getElementById("city")?.value || "";
    formData.zip = document.getElementById("zip")?.value || "";

    const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
        alert("Order submitted successfully!");
    } else {
        alert("There was an issue submitting your order.");
    }
});