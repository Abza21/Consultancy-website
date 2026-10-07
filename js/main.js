(function () {
  var S = window.SITE || {};
  document.querySelectorAll("[data-linkedin]").forEach(function (a) { a.href = S.linkedin; });
  document.querySelectorAll("form[data-form]").forEach(function (f) { f.action = S.formAction; });

  if (S.gaId) {
    var s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + S.gaId;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", S.gaId, { anonymize_ip: true });
  }

  var group = document.querySelector("[data-filters]");
  if (group) {
    var buttons = group.querySelectorAll("button");
    var cards = document.querySelectorAll("[data-category]");
    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        cards.forEach(function (c) {
          c.hidden = !(b.dataset.filter === "All" || c.dataset.category === b.dataset.filter);
        });
      });
    });
  }
})();
