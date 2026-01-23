document.addEventListener("DOMContentLoaded", () => {
  const fields = ["aroma", "hint", "undertone", "inputQuantity"];

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const saved = sessionStorage.getItem(id);
    if (saved) el.value = saved;

    el.addEventListener("change", () => {
      sessionStorage.setItem(id, el.value);
    });

    el.addEventListener("input", () => {
      sessionStorage.setItem(id, el.value);
    });
  });
});
