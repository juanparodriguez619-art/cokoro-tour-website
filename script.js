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
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    cross:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',
    chat:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5Z"/></svg>',
  };

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  // ---- Tours -------------------------------------------------------
  function bookingUrlFor(tour) {
    return tour.bookingUrl || (typeof DEFAULT_BOOKING_URL !== "undefined" ? DEFAULT_BOOKING_URL : "#");
  }

  function listHtml(items, iconSvg, cls) {
    return (
      '<ul class="detail-list ' + (cls || "") + '">' +
      items.map(function (text) {
        return "<li>" + (iconSvg || "") + "<span>" + escapeHtml(text) + "</span></li>";
      }).join("") +
      "</ul>"
    );
  }

  function detailBlock(title, inner) {
    return '<section class="detail-block"><h4>' + escapeHtml(title) + "</h4>" + inner + "</section>";
  }

  function itineraryHtml(steps) {
    return (
      '<ol class="itinerary">' +
      steps.map(function (step) {
        if (step.transit) {
          return (
            '<li class="itin-transit"><span>' + escapeHtml(step.transit) +
            (step.duration ? " · " + escapeHtml(step.duration) : "") + "</span></li>"
          );
        }
        var tags = (step.tags || []).map(function (t) {
          return '<span class="itin-tag">' + escapeHtml(t) + "</span>";
        }).join("");
        return (
          '<li class="itin-stop">' +
          '<div class="itin-title"><strong>' + escapeHtml(step.title) + "</strong>" +
          (step.duration ? '<span class="itin-time">' + escapeHtml(step.duration) + "</span>" : "") + "</div>" +
          (step.note ? "<p>" + escapeHtml(step.note) + "</p>" : "") +
          (tags ? '<div class="itin-tags">' + tags + "</div>" : "") +
          "</li>"
        );
      }).join("") +
      "</ol>"
    );
  }

  function tourDetailHtml(tour, bookingUrl) {
    var out = [];

    out.push(
      '<div class="tour-meta">' +
      "<span>" + icon.clock + " " + escapeHtml(tour.duration) + "</span>" +
      "<span>" + icon.mapPin + " " + escapeHtml(tour.area) + "</span>" +
      "<span>" + icon.users + " " + escapeHtml(tour.groupSize) + "</span>" +
      (tour.language ? "<span>" + icon.chat + " " + escapeHtml(tour.language) + "-speaking guide</span>" : "") +
      "</div>"
    );
    out.push('<p class="detail-lede">' + escapeHtml(tour.description) + "</p>");
    if (tour.freeCancellation) {
      out.push('<p class="detail-cancel">' + icon.check + " Free cancellation up to 24 hours before the tour</p>");
    }

    if (tour.highlights && tour.highlights.length) {
      out.push(detailBlock("Highlights", listHtml(tour.highlights, icon.check)));
    }
    if (tour.itinerary && tour.itinerary.length) {
      out.push(detailBlock(
        "Itinerary",
        (tour.itineraryNote ? '<p class="detail-sub">' + escapeHtml(tour.itineraryNote) + "</p>" : "") +
        itineraryHtml(tour.itinerary)
      ));
    }
    if (tour.options && tour.options.length) {
      out.push(detailBlock(
        tour.optionsTitle || "Options",
        (tour.optionsNote ? '<p class="detail-sub">' + escapeHtml(tour.optionsNote) + "</p>" : "") +
        '<div class="option-grid">' +
        tour.options.map(function (o) {
          return (
            '<div class="option-card"><strong>' + escapeHtml(o.name) + "</strong>" +
            '<span class="option-price">' + escapeHtml(o.price) + "</span>" +
            "<p>" + escapeHtml(o.text) + "</p></div>"
          );
        }).join("") +
        "</div>"
      ));
    }
    var hasInc = tour.includes && tour.includes.length;
    var hasExc = tour.excludes && tour.excludes.length;
    if (hasInc || hasExc) {
      out.push(
        '<div class="detail-cols">' +
        (hasInc ? detailBlock("Included", listHtml(tour.includes, icon.check)) : "") +
        (hasExc ? detailBlock("Not included", listHtml(tour.excludes, icon.cross, "is-excluded")) : "") +
        "</div>"
      );
    }
    if (tour.meeting) {
      var mapUrl = "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(tour.meeting.name + " " + (tour.meeting.address || ""));
      out.push(detailBlock(
        "Meeting point",
        '<p class="detail-meeting"><strong>' + escapeHtml(tour.meeting.name) + "</strong><br>" +
        escapeHtml(tour.meeting.address || "") + "</p>" +
        '<a class="detail-link" href="' + mapUrl + '" target="_blank" rel="noopener noreferrer">View on map ' + icon.arrow + "</a>"
      ));
    }
    if (tour.notes && tour.notes.length) {
      out.push(detailBlock("Good to know", listHtml(tour.notes, "", "is-plain")));
    }

    out.push(
      '<a class="btn btn-primary detail-book" data-role="booking-link" href="' + bookingUrl +
      '" target="_blank" rel="noopener noreferrer">Book on GetYourGuide ' + icon.arrow + "</a>"
    );
    return out.join("");
  }

  function tourCardHtml(tour) {
    var bookingUrl = bookingUrlFor(tour);
    var priceMarkup = tour.price
      ? (tour.originalPrice
          ? '<s class="tour-price-original">' + tour.currency + tour.originalPrice + "</s> "
          : "") +
        tour.currency + tour.price + (tour.perPerson ? " <small>/ person</small>" : "")
      : "<small>" + escapeHtml(tour.priceNote || "See price on GetYourGuide") + "</small>";

    var mediaInner =
      '<picture>' +
      '<source srcset="assets/images/' + tour.image + '.webp" type="image/webp">' +
      '<img src="assets/images/' + tour.image + '.jpg" loading="lazy" width="1000" height="800" alt="' + escapeHtml(tour.name) + '">' +
      "</picture>";
    var detailId = "tour-detail-" + tour.id;

    return (
      '<article class="tour-card" data-tour="' + escapeHtml(tour.id) + '">' +
      '<div class="tour-card-main">' +
      '<div class="tour-card-media">' + mediaInner + "</div>" +
      '<div class="tour-card-head">' +
      '<h3 class="tour-card-title"><button type="button" class="tour-card-toggle" aria-expanded="false" aria-controls="' + detailId + '">' +
      escapeHtml(tour.name) + "</button></h3>" +
      '<span class="tour-card-hint" aria-hidden="true"><span class="hint-closed">View details</span><span class="hint-open">Hide details</span>' + icon.chevron + "</span>" +
      "</div>" +
      '<div class="tour-card-footer">' +
      '<span class="tour-price">' + priceMarkup + "</span>" +
      '<a class="btn btn-primary btn-sm tour-card-book" data-role="booking-link" href="' + bookingUrl + '" target="_blank" rel="noopener noreferrer">Book</a>' +
      "</div>" +
      "</div>" +
      '<div class="tour-detail" id="' + detailId + '" hidden>' + tourDetailHtml(tour, bookingUrl) + "</div>" +
      "</article>"
    );
  }

  // An opened card spans the full row. To avoid holes in the grid it is
  // moved to the front of its own row (via CSS order), so it opens "in place".
  function layoutTourGrid(grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".tour-card"));
    var tracks = getComputedStyle(grid).gridTemplateColumns;
    var cols = tracks && tracks !== "none" ? tracks.split(" ").length : 1;
    cards.forEach(function (card, i) {
      card.style.order = card.classList.contains("is-open")
        ? Math.floor(i / cols) * cols * 2 - 1
        : i * 2;
    });
  }

  function setTourOpen(card, open) {
    card.classList.toggle("is-open", open);
    var btn = card.querySelector(".tour-card-toggle");
    var detail = card.querySelector(".tour-detail");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (detail) detail.hidden = !open;
  }

  function bindTourGrid(grid) {
    if (!grid.__tourBound) {
      grid.__tourBound = true;
      grid.addEventListener("click", function (e) {
        var btn = e.target.closest(".tour-card-toggle");
        if (!btn) return;
        var card = btn.closest(".tour-card");
        var willOpen = !card.classList.contains("is-open");
        Array.prototype.forEach.call(grid.querySelectorAll(".tour-card.is-open"), function (c) {
          setTourOpen(c, false);
        });
        setTourOpen(card, willOpen);
        layoutTourGrid(grid);
        if (willOpen) card.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      window.addEventListener("resize", function () { layoutTourGrid(grid); });
    }
    layoutTourGrid(grid);
  }

  function renderTours() {
    var grid = document.getElementById("tours-grid");
    if (!grid || typeof TOURS === "undefined") return;
    grid.innerHTML = TOURS.map(tourCardHtml).join("");
    bindTourGrid(grid);
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
      bindTourGrid(grid);

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
  function reviewCardHtml(review, profileUrl) {
    var photo = review.image
      ? '<picture><source srcset="assets/images/' + review.image + '.webp" type="image/webp">' +
        '<img loading="lazy" src="assets/images/' + review.image + '.jpg" alt="" width="720" height="720"></picture>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
    var badge = '<div class="review-rating-badge" aria-label="' + review.rating + ' out of 5 stars">' + icon.star + review.rating.toFixed(1) + "</div>";
    var mediaWrap =
      '<div class="review-card-media' + (review.image ? "" : " is-placeholder") + '"' + (review.image ? "" : ' aria-hidden="true"') + ">" +
      photo + badge +
      "</div>";

    return (
      '<article class="review-card">' +
      mediaWrap +
      '<div class="review-card-body">' +
      "<h3>" + escapeHtml(review.name) + "</h3>" +
      '<p class="review-card-quote">' + escapeHtml(review.quote) + "</p>" +
      '<a class="review-card-link" href="' + profileUrl + '" target="_blank" rel="noopener noreferrer">See on GetYourGuide ' + icon.arrow + "</a>" +
      "</div>" +
      "</article>"
    );
  }

  function renderReviews() {
    var grid = document.getElementById("reviews-grid");
    if (!grid || typeof REVIEWS === "undefined") return;

    if (!REVIEWS.length) {
      grid.innerHTML =
        '<p class="reviews-empty">Real guest reviews are on their way — add them anytime in <code>data.js</code>.</p>';
      return;
    }

    var profileUrl = typeof DEFAULT_BOOKING_URL !== "undefined" ? DEFAULT_BOOKING_URL : "#";
    var cards = REVIEWS.map(function (r) { return reviewCardHtml(r, profileUrl); }).join("");

    // Two identical sets side by side; the track slides left by exactly one set,
    // then repeats, so the loop never shows a jump.
    grid.innerHTML =
      '<div class="review-track">' +
      '<div class="review-set">' + cards + "</div>" +
      '<div class="review-set" aria-hidden="true">' + cards + "</div>" +
      "</div>";
    Array.prototype.forEach.call(grid.querySelectorAll('.review-set[aria-hidden="true"] a'), function (a) {
      a.tabIndex = -1;
    });

    // Touch screens have no hover: pause while a finger is down, resume shortly after.
    var resumeTimer;
    grid.addEventListener("touchstart", function () {
      clearTimeout(resumeTimer);
      grid.classList.add("is-paused");
    }, { passive: true });
    function resume() {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () { grid.classList.remove("is-paused"); }, 2500);
    }
    grid.addEventListener("touchend", resume);
    grid.addEventListener("touchcancel", resume);
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
