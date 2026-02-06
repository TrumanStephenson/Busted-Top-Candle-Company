document.addEventListener("DOMContentLoaded", function() {
    const qtyInput = document.getElementById("inputQuantity");
    let pricePer = document.getElementById("costDisplay");

    qtyInput.addEventListener("input", function() {
        const qty = parseInt(this.value, 10);
        let pricePer = 0;

        if (!qty || qty <= 0) {
            costDisplay.textContent = "Total: ";
            return;
        }

        if (qty >= 12) {
            pricePer = 16;
        } else if (qty >= 3) {
            pricePer = 20;
        } else if (qty === 1) {
            pricePer = 25;
        } else if (qty === 2) {
            pricePer = 25;
        }

        const total = qty * pricePer;
        document.getElementById("costDisplay").innerText = `Total: $${total}`;
    });
});

var scentDescription = document.getElementById("scentDescription");
    