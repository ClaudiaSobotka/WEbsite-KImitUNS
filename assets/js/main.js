/**
 * KI.mit.UNS – zentrales Skript
 * Enthält nur echte Interaktivität: mobiles Menü, FAQ-Akkordeon,
 * Kontaktformular-Demo-Validierung. Kein Tracking, keine externen Aufrufe.
 */
(function () {
  "use strict";

  /* ---------- Mobiles Menü ---------- */
  function initNavToggle() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    var mq = window.matchMedia("(min-width: 62rem)");

    function setState(open) {
      toggle.setAttribute("aria-expanded", String(open));
      if (open) {
        nav.removeAttribute("hidden");
      } else if (!mq.matches) {
        nav.setAttribute("hidden", "");
      }
    }

    setState(mq.matches);

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      setState(!isOpen);
    });

    mq.addEventListener("change", function (e) {
      if (e.matches) {
        nav.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        setState(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setState(false);
        toggle.focus();
      }
    });
  }

  /* ---------- FAQ-Akkordeon ---------- */
  function initFaq() {
    var questions = document.querySelectorAll(".faq-item__question");
    questions.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        var answer = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        if (answer) {
          if (expanded) {
            answer.setAttribute("hidden", "");
          } else {
            answer.removeAttribute("hidden");
          }
        }
      });
    });
  }

  /* ---------- Kontaktformular (Demo, keine Übertragung) ---------- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var status = document.getElementById("form-status");

    function setError(fieldWrap, message) {
      fieldWrap.classList.add("has-error");
      var errorEl = fieldWrap.querySelector(".error");
      if (errorEl) errorEl.textContent = message;
    }

    function clearError(fieldWrap) {
      fieldWrap.classList.remove("has-error");
    }

    function validate() {
      var isValid = true;
      var name = form.querySelector("#field-name");
      var email = form.querySelector("#field-email");
      var message = form.querySelector("#field-message");
      var consent = form.querySelector("#field-consent");

      [name, email, message].forEach(function (input) {
        var wrap = input.closest(".form-field");
        clearError(wrap);
      });
      form.querySelector("#field-consent").closest(".form-field").classList.remove("has-error");

      if (!name.value.trim()) {
        setError(name.closest(".form-field"), "Bitte gib Deinen Namen ein.");
        isValid = false;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        setError(email.closest(".form-field"), "Bitte gib eine gültige E-Mail-Adresse ein.");
        isValid = false;
      }

      if (!message.value.trim()) {
        setError(message.closest(".form-field"), "Bitte beschreibe kurz Deine Frage oder Herausforderung.");
        isValid = false;
      }

      if (!consent.checked) {
        setError(consent.closest(".form-field"), "Bitte stimme der Datenschutzhinweis-Kenntnisnahme zu.");
        isValid = false;
      }

      return isValid;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.classList.remove("form-status--success", "form-status--error", "is-visible");

      if (validate()) {
        status.textContent =
          "Demo-Formular: In diesem lokalen Erstentwurf werden keine Daten übertragen oder gespeichert. Vor einem echten Einsatz muss ein datenschutzkonformes Formular-Backend angebunden werden.";
        status.classList.add("form-status--success", "is-visible");
        form.reset();
      } else {
        status.textContent = "Bitte prüfe die markierten Felder.";
        status.classList.add("form-status--error", "is-visible");
      }
      status.setAttribute("tabindex", "-1");
      status.focus();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initFaq();
    initContactForm();
  });
})();
