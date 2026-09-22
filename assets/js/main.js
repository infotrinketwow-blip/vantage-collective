/* =========================================================================
   VANTAGE COLLECTIVE — main.js
   Nav scroll reactivity, parallax layers, collage stagger reveals,
   pinned process-section progress, peak-moment trigger, stamp CTA feel.
   No build step, no dependencies. Respects prefers-reduced-motion.
   ========================================================================= */
(function () {
  'use strict';

  var reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = reduceMotionQuery.matches;
  reduceMotionQuery.addEventListener && reduceMotionQuery.addEventListener('change', function (e) {
    reduceMotion = e.matches;
  });

  /* ---------------------------------------------------------------------
     Footer year
     --------------------------------------------------------------------- */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------------
     NAV: scroll-reactive solidify + mobile burger
     --------------------------------------------------------------------- */
  var nav = document.querySelector('[data-nav]');
  var burger = document.querySelector('[data-burger]');

  function updateNav() {
    if (!nav) return;
    var solid = window.scrollY > window.innerHeight * 0.6;
    nav.classList.toggle('is-solid', solid);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  if (burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('[data-mobile-menu] a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------------------
     COLLAGE STAGGER REVEAL — IntersectionObserver, per-group stagger,
     randomized-but-stable torn-paper offsets per element.
     --------------------------------------------------------------------- */
  var collageGroups = document.querySelectorAll('[data-collage-group]');

  collageGroups.forEach(function (group) {
    var items = group.querySelectorAll('[data-collage]');
    items.forEach(function (el, i) {
      // stable pseudo-random offset so reloads look intentional, not jittery
      var seed = (i * 37 + el.textContent.length * 3) % 11;
      var dx = ((seed % 5) - 2) * 10; // -20..20px
      el.style.setProperty('--cx', dx + 'px');
      el.style.setProperty('--cdelay', (i * 0.09).toFixed(2) + 's');
    });
  });

  if ('IntersectionObserver' in window) {
    var groupObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var items = entry.target.querySelectorAll('[data-collage]');
          items.forEach(function (el) { el.classList.add('is-in'); });
          groupObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    collageGroups.forEach(function (group) { groupObserver.observe(group); });
  } else {
    // no IO support: reveal everything immediately
    document.querySelectorAll('[data-collage]').forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------------------------------------------------------------------
     PARALLAX LAYERS (hero) — rAF-throttled scroll-linked transform.
     Disabled under prefers-reduced-motion (layers stay static).
     --------------------------------------------------------------------- */
  var parallaxEls = document.querySelectorAll('[data-speed]');
  var ticking = false;

  function applyParallax() {
    ticking = false;
    if (reduceMotion) return;
    var scrollY = window.scrollY;
    var heroHeight = window.innerHeight;
    if (scrollY > heroHeight * 1.4) return; // hero out of view, stop paying the cost
    parallaxEls.forEach(function (el) {
      var speed = parseFloat(el.getAttribute('data-speed')) || 0.3;
      var offset = scrollY * speed;
      el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
    });
  }
  function onScrollParallax() {
    if (!ticking) {
      window.requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }
  if (!reduceMotion && parallaxEls.length) {
    window.addEventListener('scroll', onScrollParallax, { passive: true });
    applyParallax();
  }

  /* ---------------------------------------------------------------------
     PINNED PROCESS SECTION — content advances while section stays pinned.
     Maps scroll progress through the tall wrapper to: active step index,
     horizontal step-track offset, and a progress bar fill.
     --------------------------------------------------------------------- */
  var pinSection = document.querySelector('[data-pin-section]');
  if (pinSection) {
    var pinInner = pinSection.querySelector('[data-pin-inner]');
    var stepsTrack = pinSection.querySelector('[data-pin-steps]');
    var steps = pinSection.querySelectorAll('[data-pin-step]');
    var progressBar = pinSection.querySelector('[data-pin-progress]');

    function updatePin() {
      var rect = pinSection.getBoundingClientRect();
      var total = pinSection.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      var scrolled = Math.min(Math.max(-rect.top, 0), total);
      var progress = scrolled / total; // 0..1

      if (progressBar) progressBar.style.transform = 'scaleX(' + progress.toFixed(3) + ')';

      var activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      steps.forEach(function (step, i) {
        step.classList.toggle('is-active', i === activeIndex);
      });

      if (stepsTrack && !reduceMotion) {
        var maxScroll = Math.max(0, stepsTrack.scrollWidth - stepsTrack.clientWidth);
        stepsTrack.scrollLeft = maxScroll * progress;
      }
    }

    var pinTicking = false;
    function onScrollPin() {
      if (!pinTicking) {
        window.requestAnimationFrame(function () { pinTicking = false; updatePin(); });
        pinTicking = true;
      }
    }
    window.addEventListener('scroll', onScrollPin, { passive: true });
    window.addEventListener('resize', updatePin);
    updatePin();
  }

  /* ---------------------------------------------------------------------
     PEAK MOMENT — objection section: lime flash + needle sweep + stamp slam
     Fires once, the first time the section enters view.
     --------------------------------------------------------------------- */
  var peakSection = document.querySelector('[data-peak-section]');
  if (peakSection && 'IntersectionObserver' in window) {
    var flash = peakSection.querySelector('[data-peak-flash]');
    var meter = peakSection.querySelector('[data-peak-meter]');
    var stamp = peakSection.querySelector('[data-peak-stamp]');

    var peakObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!reduceMotion) {
            flash && flash.classList.add('is-hit');
            peakSection.classList.add('is-shaking');
            window.setTimeout(function () { peakSection.classList.remove('is-shaking'); }, 450);
          }
          meter && meter.classList.add('is-hit');
          window.setTimeout(function () {
            stamp && stamp.classList.add('is-hit');
          }, reduceMotion ? 0 : 550);
          peakObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45 });

    peakObserver.observe(peakSection);
  }

  /* ---------------------------------------------------------------------
     STAMP CTA MICRO-INTERACTION — tactile "hit" on click/activation,
     plus a lime ink-flash ring. Keyboard-activatable (Enter/Space via
     native click), not just pointer events.
     --------------------------------------------------------------------- */
  document.querySelectorAll('[data-stamp]').forEach(function (btn) {
    var ink = document.createElement('span');
    ink.className = 'btn__ink';
    ink.setAttribute('aria-hidden', 'true');
    btn.appendChild(ink);

    btn.addEventListener('click', function () {
      if (reduceMotion) return;
      btn.classList.remove('is-stamping');
      // force reflow to restart animation on rapid re-clicks
      void btn.offsetWidth;
      btn.classList.add('is-stamping');
    });
    btn.addEventListener('animationend', function (e) {
      if (e.target === btn) btn.classList.remove('is-stamping');
    });
  });

})();

/* -------------------------------------------------------------
   Robust hero video autoplay (the native `autoplay` attribute can
   silently fail to fire depending on browser/timing) — force a
   .play() call on load, on data-ready, and on first interaction.
   ------------------------------------------------------------- */
(function () {
  function initVideo(vid) {
    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    var tryPlay = function () {
      var p = vid.play();
      if (p && p.catch) p.catch(function () {});
    };
    tryPlay();
    vid.addEventListener("loadedmetadata", tryPlay);
    vid.addEventListener("loadeddata", tryPlay);
    vid.addEventListener("canplay", tryPlay);
    vid.addEventListener("canplaythrough", tryPlay);
    var retryOnInteraction = function () {
      tryPlay();
      window.removeEventListener("scroll", retryOnInteraction);
      window.removeEventListener("click", retryOnInteraction);
      window.removeEventListener("touchstart", retryOnInteraction);
      window.removeEventListener("keydown", retryOnInteraction);
    };
    window.addEventListener("scroll", retryOnInteraction, { once: true, passive: true });
    window.addEventListener("click", retryOnInteraction, { once: true });
    window.addEventListener("touchstart", retryOnInteraction, { once: true, passive: true });
    window.addEventListener("keydown", retryOnInteraction, { once: true });
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) tryPlay();
    });
  }
  document.querySelectorAll("video[autoplay]").forEach(initVideo);
  window.addEventListener("load", function () {
    document.querySelectorAll("video[autoplay]").forEach(function (vid) {
      var p = vid.play();
      if (p && p.catch) p.catch(function () {});
    });
  });
})();

/* -------------------------------------------------------------
   Hero sound toggle — video autoplays muted (browser requirement);
   this button lets the visitor opt into sound with one click.
   ------------------------------------------------------------- */
(function () {
  var vid = document.getElementById("heroVideo");
  var btn = document.getElementById("heroSoundToggle");
  if (!vid || !btn) return;
  var icon = btn.querySelector(".hero__sound-icon");
  var label = btn.querySelector(".hero__sound-label");
  btn.addEventListener("click", function () {
    var wasMuted = vid.muted;
    vid.muted = !wasMuted;
    var soundOn = wasMuted; // sound is now on iff it was previously muted
    btn.setAttribute("aria-pressed", String(soundOn));
    if (icon) icon.textContent = soundOn ? "🔊" : "🔇";
    if (label) label.textContent = soundOn ? "Sound on" : "Sound off";
    var p = vid.play();
    if (p && p.catch) p.catch(function () {});
  });
})();
