/**
 * CoKoro Tour — site behavior
 * Renders tour/guide/review cards from data.js, plus small UI interactions.
 * No build step required — plain ES2017+, loaded after data.js.
 */
(function () {
  "use strict";

  document.body.classList.remove("no-js");
  document.body.classList.add("js");

  var icon = {
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>',
    mapPin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-4.5-4-8-7.5-8-11.5A8 8 0 0 1 12 2a8 8 0 0 1 8 7.5C20 13.5 16.5 17 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    users:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    star:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.8 7.1-.7L12 2.5Z"/></svg>',
    chevron:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  };

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  // ---- Tours -------------------------------------------------------
  function tourCardHtml(tour) {
    var bookingUrl = tour.bookingUrl || (typeof DEFAULT_BOOKING_URL !== "undefined" ? DEFAULT_BOOKING_URL : "#");
    var priceMarkup = tour.price
      ? tour.currency + tour.price + (tour.perPerson ? " <small>/ person</small>" : "")
      : "<small>" + escapeHtml(tour.priceNote || "See price on GetYourGuide") + "</small>";

    var mediaInner =
      '<picture>' +
      '<source srcset="assets/images/' + tour.image + '.webp" type="image/webp">' +
      '<img src="assets/images/' + tour.image + '.jpg" loading="lazy" width="1000" height="800" alt="' + escapeHtml(tour.name) + '">' +
      "</picture>";

    return (
      '<article class="tour-card">' +
      '<div class="tour-card-media">' + mediaInner + "</div>" +
      '<div class="tour-card-body">' +
      "<h3>" + escapeHtml(tour.name) + "</h3>" +
      "<p>" + escapeHtml(tour.description) + "</p>" +
      '<div class="tour-meta">' +
      "<span>" + icon.clock + " " + escapeHtml(tour.duration) + "</span>" +
      "<span>" + icon.mapPin + " " + escapeHtml(tour.area) + "</span>" +
      "<span>" + icon.users + " " + escapeHtml(tour.groupSize) + "</span>" +
      "</div>" +
      '<div class="tour-card-footer">' +
      '<span class="tour-price">' + priceMarkup + "</span>" +
      '<a class="tour-card-cta" data-role="booking-link" href="' + bookingUrl + '" target="_blank" rel="noopener noreferrer">Book ' + icon.arrow + "</a>" +
      "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function renderTours() {
    var grid = document.getElementById("tours-grid");
    if (!grid || typeof TOURS === "undefined") return;
    grid.innerHTML = TOURS.map(tourCardHtml).join("");
  }

  // ---- Tours by area (tours.html) -----------------------------------
  function initToursPage() {
    var tabs = document.getElementById("tour-region-tabs");
    var grid = document.getElementById("tours-page-grid");
    if (!tabs || !grid || typeof REGIONS === "undefined" || typeof TOURS === "undefined") return;

    function toursIn(regionId) {
      return TOURS.filter(function (tour) { return tour.region === regionId; });
    }

    function renderRegion(regionId) {
      var matches = toursIn(regionId);
      grid.innerHTML = matches.length
        ? matches.map(tourCardHtml).join("")
        : '<p class="tours-coming-soon">More tours in this area are on the way — follow ' +
          '<a href="https://www.instagram.com/cokorotour/" target="_blank" rel="noopener noreferrer">@cokorotour</a> ' +
          "for updates, or " +
          '<a href="index.html#contact">get in touch</a> and we’ll let you know as soon as they’re live.</p>';

      Array.prototype.forEach.call(tabs.querySelectorAll("[data-region]"), function (btn) {
        var isActive = btn.getAttribute("data-region") === regionId;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    }

    tabs.innerHTML = REGIONS.map(function (region) {
      var hasTours = toursIn(region.id).length > 0;
      return (
        '<button type="button" class="region-tab" data-region="' + region.id + '" role="tab" aria-selected="false">' +
        escapeHtml(region.name) +
        (hasTours ? "" : ' <small>(Coming soon)</small>') +
        "</button>"
      );
    }).join("");

    tabs.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-region]");
      if (!btn) return;
      renderRegion(btn.getAttribute("data-region"));
    });

    var initialRegion = REGIONS.find(function (r) { return toursIn(r.id).length > 0; }) || REGIONS[0];
    renderRegion(initialRegion ? initialRegion.id : REGIONS[0].id);
  }

  // ---- Guides -------------------------------------------------------
  function renderGuides() {
    var grid = document.getElementById("guides-grid");
    if (!grid || typeof GUIDES === "undefined") return;

    grid.innerHTML = GUIDES.map(function (guide) {
      var media = guide.image
        ? '<picture><source srcset="assets/images/' + guide.image + '.webp" type="image/webp">' +
          '<img loading="lazy" src="assets/images/' + guide.image + '.jpg" alt="' + escapeHtml(guide.name) + '" width="900" height="1100"></picture>'
        : '<div class="guide-photo-placeholder" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>' +
          "</div>";
      return (
        '<div class="guide-item">' +
        '<div class="guide-photo">' + media + "</div>" +
        "<strong>" + escapeHtml(guide.name) + "</strong>" +
        "</div>"
      );
    }).join("");
  }

  // ---- Reviews -------------------------------------------------------
  function renderReviews() {
    var grid = document.getElementById("reviews-grid");
    if (!grid || typeof REVIEWS === "undefined") return;

    if (!REVIEWS.length) {
      grid.innerHTML =
        '<p class="reviews-empty">Real guest reviews are on their way — add them anytime in <code>data.js</code>.</p>';
      return;
    }

    grid.innerHTML = REVIEWS.map(function (review) {
      var stars = "";
      for (var i = 0; i < 5; i++) {
        stars += i < review.rating ? icon.star : '<span style="opacity:.25">' + icon.star + "</span>";
      }
      var media = review.image
        ? '<picture><source srcset="assets/images/' + review.image + '.webp" type="image/webp">' +
          '<img loading="lazy" src="assets/images/' + review.image + '.jpg" alt="" width="900" height="900"></picture>'
        : "";
      return (
        '<article class="polaroid-card">' +
        media +
        '<div class="review-stars" aria-label="' + review.rating + ' out of 5 stars">' + stars + "</div>" +
        '<p class="review-quote">“' + escapeHtml(review.quote) + '”</p>' +
        '<div class="review-author"><strong>' + escapeHtml(review.name) + "</strong></div>" +
        "</article>"
      );
    }).join("");
  }

  // ---- Mobile nav -------------------------------------------------------
  function initNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    function closeNav() {
      nav.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    function openNav() {
      nav.setAttribute("data-open", "true");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }

    toggle.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-open") === "true";
      if (isOpen) closeNav();
      else openNav();
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeNav();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") {
        closeNav();
        toggle.focus();
      }
    });
  }

  // ---- Booking link guard (dev-time only) -------------------------------
  function initBookingGuard() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest('[data-role="booking-link"]');
      if (!link) return;
      var href = link.getAttribute("href") || "";
      if (href === "#" || href.trim() === "") {
        e.preventDefault();
        showToast("Booking link not connected yet — add your GetYourGuide URL in data.js.");
      }
    });
  }

  var toastTimer = null;
  function showToast(message) {
    var toast = document.querySelector(".dev-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "dev-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(function () {
      toast.classList.add("is-visible");
    });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 4000);
  }

  // ---- Scroll reveal -------------------------------------------------------
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  // ---- Header: scroll-spy active nav pill --------------------------------
  function initHeaderScroll() {
    var navLinks = document.querySelectorAll("[data-nav-link]");
    var sections = [];
    navLinks.forEach(function (link) {
      var id = link.getAttribute("data-nav-link");
      var section = document.getElementById(id);
      if (section) sections.push({ id: id, el: section, link: link });
    });
    if (!sections.length || !("IntersectionObserver" in window)) return;

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var match = sections.find(function (s) { return s.el === entry.target; });
          if (!match) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("is-active"); });
            match.link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spy.observe(s.el); });
  }

  // ---- Hero video: respect reduced motion / hidden tab -------------------
  function initHeroVideo() {
    var video = document.getElementById("hero-video");
    if (!video) return;

    // Always keep the hero video playing on loop — including under
    // prefers-reduced-motion / iOS Low Power Mode, which can otherwise
    // pause or block autoplay. This is a deliberate brand choice: the
    // hero video is core to the design, not a decorative embellishment.
    function keepPlaying() {
      if (video.paused) video.play().catch(function () {});
    }
    video.addEventListener("pause", keepPlaying);

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) keepPlaying();
    });

    keepPlaying();
  }

  function initFooterYear() {
    var el = document.getElementById("footer-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderTours();
    renderGuides();
    renderReviews();
    initToursPage();
    initNav();
    initBookingGuard();
    initReveal();
    initHeaderScroll();
    initHeroVideo();
    initFooterYear();
  });
})();
