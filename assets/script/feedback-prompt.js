(function () {
    const STORAGE_KEY = "btc_feedback_prompt_dismissed";
  
    if (window.location.pathname.includes("contact")) return;
  
    if (localStorage.getItem(STORAGE_KEY) === "true") return;
  
    const contactPath = "/pages/contact.html";
  
    const feedbackMessage =
      "I'd like to share feedback about the website:\n\n" +
      "What I liked:\n" +
      "- \n\n" +
      "What could be improved:\n" +
      "- \n\n" +
      "Anything confusing or hard to find:\n" +
      "- ";
  
    const feedbackUrl =
      contactPath +
      "?feedback=1" +
      "&message=" +
      encodeURIComponent(feedbackMessage);
  
    function dismiss() {
      localStorage.setItem(STORAGE_KEY, "true");
      banner.remove();
    }
  
    const banner = document.createElement("div");
    banner.id = "feedback-banner";
    banner.className =
      "position-fixed bottom-0 start-0 end-0 p-3";
    banner.style.zIndex = "1080";
    banner.innerHTML = `
      <div class="container">
        <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-2 p-3 rounded shadow bg-white border">
          <p class="mb-0 small">
            Enjoying Busted Top Candles? We would love your feedback on the site or products.
          </p>
          <div class="d-flex gap-2 flex-shrink-0">
            <a href="${feedbackUrl}" class="btn btn-primary btn-sm">
              Share feedback
            </a>
            <button type="button" class="btn btn-secondary btn-sm" data-feedback-dismiss>
              Not now
            </button>
          </div>
        </div>
      </div>
    `;
  
    banner.querySelector("[data-feedback-dismiss]").addEventListener("click", dismiss);

    setTimeout(function () {
      document.body.appendChild(banner);
    }, 5000);
  })();