document.getElementById("submit_order").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

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