document.getElementById("page1_form").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    sessionStorage.setItem("orderData", JSON.stringify(data));

    window.location.href = "/form-submission-scents.html";
});