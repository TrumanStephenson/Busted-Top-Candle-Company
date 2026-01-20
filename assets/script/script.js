document.addEventListener("DOMContentLoaded", function() {
    const qtyInput = document.getElementById("inputQuantity");
    // let pricePer = document.getElementById("costDisplay");

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

document.addEventListener("DOMContentLoaded", () => {
    fetch("/assets/data/ScentInventory-8.csv")
    .then(res => res.text())
    .then(csv => {
        const rows = csv.split("\n").map(r => {
            const match = r.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
            return match ? match.map(cell => cell.replace(/^"|"$/g, "")) : [];
        });

        const tbody = document.querySelector("tbody");

        // Skip header row
        rows.slice(1).forEach(cols => {
            if (cols.length < 5) return;

            const [flavor, hint1, hint2, hint3, description] = cols;

            tbody.innerHTML += `
                <tr>
                    <td>${flavor}</td>
                    <td>${hint1}</td>
                    <td>${hint2}</td>
                    <td>${hint3}</td>
                    <td>${description}</td>
                </tr>
            `;
        });
    });
});