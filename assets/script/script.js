document.addEventListener("DOMContentLoaded", function() {
    const qtyInput = document.getElementById("inputQuantity");
    let pricePer = document.getElementById("costDisplay");

    qtyInput.addEventListener("input", function() {
        const qty = parseInt(this.value, 10);
        let pricePer = 0;

        if (!qty || qty <= 0) {
            costDisplay.textContent = "";
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

const states = [ 
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", 
    "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", 
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", 
    "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY" 
];

const select = document.getElementById("inputState");

states.forEach(state => {
    const option = document.createElement("option");
    option.textContent = state;
    option.value = state;
    select.appendChild(option);
});