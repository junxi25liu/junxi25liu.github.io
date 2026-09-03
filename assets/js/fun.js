/* ==========================================================================
   fun.js - small interactive touches for the homepage
   --------------------------------------------------------------------------
   Everything here is additive and defensive: if an element is missing the
   corresponding feature simply does not initialise. Nothing blocks rendering.
   Honours prefers-reduced-motion.
   ========================================================================== */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------------------
     1. Waveform bars: random heights + speeds so it looks like real audio,
        and it "reacts" when the pointer moves across it.
     ---------------------------------------------------------------------- */
  function initWaveform() {
    var strips = document.querySelectorAll(".waveform");
    if (!strips.length) return;

    Array.prototype.forEach.call(strips, function (strip) {
      var barCount = 48;
      var frag = document.createDocumentFragment();

      for (var i = 0; i < barCount; i++) {
        var bar = document.createElement("span");
        // Vary the animation so bars do not move in lockstep.
        var dur = (0.9 + Math.random() * 1.4).toFixed(2);
        var delay = (Math.random() * 1.4).toFixed(2);
        bar.style.animationDuration = dur + "s";
        bar.style.animationDelay = "-" + delay + "s";
        bar.style.height = (18 + Math.random() * 70).toFixed(0) + "%";
        frag.appendChild(bar);
      }
      strip.appendChild(frag);

      if (reduceMotion) return;

      // Bars near the cursor light up and grow.
      strip.addEventListener("mousemove", function (e) {
        var rect = strip.getBoundingClientRect();
        var rel = (e.clientX - rect.left) / rect.width;
        var bars = strip.children;
        var focus = rel * bars.length;

        for (var i = 0; i < bars.length; i++) {
          var dist = Math.abs(i - focus);
          if (dist < 5) {
            var boost = 1 - dist / 5;
            bars[i].style.opacity = (0.55 + boost * 0.45).toFixed(2);
            // Grow the bar itself rather than transform, so the keyframe
            // animation (which owns transform) is not clobbered.
            bars[i].style.height = (18 + boost * 74).toFixed(0) + "%";
          } else {
            bars[i].style.opacity = "";
          }
        }
      });

      strip.addEventListener("mouseleave", function () {
        var bars = strip.children;
        for (var i = 0; i < bars.length; i++) {
          bars[i].style.opacity = "";
        }
      });
    });
  }

  /* ----------------------------------------------------------------------
     2. Click the avatar to pop a few music notes.
     ---------------------------------------------------------------------- */
  function initAvatarNotes() {
    var avatar = document.querySelector(".author__avatar img");
    if (!avatar || reduceMotion) return;

    var glyphs = ["\u266A", "\u266B", "\u266C", "\u1D160", "\u266F"];
    avatar.style.cursor = "pointer";
    avatar.setAttribute("title", "poke me");

    avatar.addEventListener("click", function () {
      var rect = avatar.getBoundingClientRect();

      for (var i = 0; i < 6; i++) {
        (function (idx) {
          var note = document.createElement("span");
          note.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
          note.style.cssText = [
            "position:fixed",
            "left:" + (rect.left + rect.width / 2) + "px",
            "top:" + (rect.top + rect.height / 2) + "px",
            "font-size:" + (16 + Math.random() * 14).toFixed(0) + "px",
            "color:hsl(" + Math.floor(200 + Math.random() * 130) + ",78%,58%)",
            "pointer-events:none",
            "z-index:9999",
            "transition:transform 1.05s cubic-bezier(.2,.7,.3,1),opacity 1.05s ease",
            "transform:translate(-50%,-50%)",
            "opacity:1"
          ].join(";");
          document.body.appendChild(note);

          // Kick off the flight on the next frame.
          requestAnimationFrame(function () {
            var dx = (Math.random() - 0.5) * 170;
            var dy = -70 - Math.random() * 110;
            var rot = (Math.random() - 0.5) * 90;
            note.style.transform =
              "translate(calc(-50% + " + dx.toFixed(0) + "px), calc(-50% + " +
              dy.toFixed(0) + "px)) rotate(" + rot.toFixed(0) + "deg)";
            note.style.opacity = "0";
          });

          setTimeout(function () {
            if (note.parentNode) note.parentNode.removeChild(note);
          }, 1200 + idx * 30);
        })(i);
      }
    });
  }

  /* ----------------------------------------------------------------------
     3. Cards fade in as they scroll into view.
     ---------------------------------------------------------------------- */
  function initReveal() {
    var targets = document.querySelectorAll(".paper, .interest-card");
    if (!targets.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return; // leave them visible in their default state
    }

    Array.prototype.forEach.call(targets, function (el, i) {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition =
        "opacity .5s ease " + (i % 6) * 0.05 + "s, transform .5s ease " +
        (i % 6) * 0.05 + "s";
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    Array.prototype.forEach.call(targets, function (el) {
      io.observe(el);
    });

    // Safety net: if anything is still hidden after 2.5s, show it.
    setTimeout(function () {
      Array.prototype.forEach.call(targets, function (el) {
        if (el.style.opacity === "0") {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    }, 2500);
  }

  /* ----------------------------------------------------------------------
     4. Konami code easter egg: the page briefly "listens".
     ---------------------------------------------------------------------- */
  function initKonami() {
    var seq = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"
    ];
    var pos = 0;

    document.addEventListener("keydown", function (e) {
      var key = e.key;
      var want = seq[pos];
      var hit = key === want ||
        (want.length === 1 && key.toLowerCase() === want);

      if (!hit) {
        pos = key === seq[0] ? 1 : 0;
        return;
      }

      pos++;
      if (pos < seq.length) return;
      pos = 0;

      var toast = document.createElement("div");
      toast.textContent = "\u266A  now generating audio\u2026  \u266A";
      toast.style.cssText = [
        "position:fixed",
        "left:50%",
        "bottom:36px",
        "transform:translateX(-50%) translateY(16px)",
        "padding:12px 22px",
        "border-radius:999px",
        "background:linear-gradient(120deg,#6d5efc,#00c2b8)",
        "color:#fff",
        "font-weight:700",
        "letter-spacing:.02em",
        "box-shadow:0 12px 30px rgba(31,35,51,.28)",
        "z-index:10000",
        "opacity:0",
        "transition:opacity .3s ease, transform .3s ease"
      ].join(";");
      document.body.appendChild(toast);

      requestAnimationFrame(function () {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
      });

      if (!reduceMotion) {
        document.body.style.transition = "filter .5s ease";
        document.body.style.filter = "hue-rotate(28deg) saturate(1.15)";
      }

      setTimeout(function () {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(-50%) translateY(16px)";
        document.body.style.filter = "";
        setTimeout(function () {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 400);
      }, 2200);
    });
  }

  function boot() {
    try { initWaveform(); }    catch (e) {}
    try { initAvatarNotes(); } catch (e) {}
    try { initReveal(); }      catch (e) {}
    try { initKonami(); }      catch (e) {}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
