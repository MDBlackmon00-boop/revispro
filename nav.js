(function () {
  var header = document.querySelector(".site-header");
  var button = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!header || !button || !nav) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    header.classList.toggle("nav-open", open);
  }

  button.addEventListener("click", function () {
    var open = button.getAttribute("aria-expanded") !== "true";
    setOpen(open);
    if (open) {
      var first = nav.querySelector("a");
      if (first) first.focus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (button.getAttribute("aria-expanded") !== "true") return;
    if (header.contains(event.target)) return;
    setOpen(false);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 601px)").matches) setOpen(false);
  });
})();
