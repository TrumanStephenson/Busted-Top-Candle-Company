document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("/assets/data/scents.json");
    const data = await response.json();
    const scents = data.ScentInventory;

    const select = document.getElementById("scents");
    const desc = document.getElementById("scentDescription");

    scents.forEach(scent => {
        const option = document.createElement("option");
        option.value = scent.id;
        option.textContent = scent.name;
        select.appendChild(option);
    });

    select.addEventListener("change", () => {
        const selectedId = select.value;
        const scent = scents.find(s => s.id === selectedId);

        desc.textContent =
            "Description: \n" + (scent?.description || "No description available");
    });
});


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

const images = [
    "./assets/pictures/btc-photos/disco-1.jpg",
    "./assets/pictures/btc-photos/disco-3.jpg",
    "./assets/pictures/btc-photos/disco-4.jpg",
    "./assets/pictures/btc-photos/disco-5.jpg",
    "./assets/pictures/btc-photos/disco-6.jpg"
]

let index = 0;
let imgElement = document.getElementById("carousel-img");

function changeImage(step = 1) {
    if (!imgElement) return;

    imgElement.style.opacity = 0;
    setTimeout(() => {
        index = (index + step + images.length) % images.length;
        imgElement.src = images[index];
        imgElement.style.opacity = 1;
    }, 400);
}

let autoSlide = imgElement ? setInterval(changeImage, 3500) : null;
