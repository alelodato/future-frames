import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Intro.module.css";

export default function Intro() {
  const slides = [
    {
      img: "/images/eventi.webp",
      title: "EVENTI",
      text: "Descrizione breve del primo servizio, creatività e cura dei dettagli.",
    },
    {
      img: "/images/azienda.webp",
      title: "AZIENDE",
      text: "Descrizione del secondo servizio, stile e produzione professionale.",
    },
    {
      img: "/images/sfondo.jpg",
      title: "CERIMONIE",
      text: "Descrizione del terzo servizio, narrazione visiva e impatto.",
    },
    {
      img: "/images/introimg6.webp",
      title: "FOOD",
      text: "Descrizione del quarto servizio, post-produzione e coerenza.",
    },
    {
      img: "/images/montaggio.webp",
      title: "MONTAGGIO",
      text: "Descrizione del quinto servizio, strategia e risultato.",
    },
  ];

  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);

  // drag state refs to avoid re-renders
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const preventClickRef = useRef(false);

  const THRESHOLD = 60; // px to switch slide
  const CLICK_THRESHOLD = 8; // px to consider drag vs click

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(slides.length - 1, i + 1));
  const goTo = (i) => setIndex(Math.max(0, Math.min(slides.length - 1, i)));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ensure track snaps when index changes programmatically
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transition = "";
      track.style.transform = `translateX(${ -index * 100 }%)`;
    }
  }, [index]);

  // pointer/touch drag with translate feedback
  useEffect(() => {
    const el = carouselRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    function onPointerDown(e) {
      // only primary button for mouse
      if (e.pointerType === "mouse" && e.button !== 0) return;
      draggingRef.current = true;
      startXRef.current = e.clientX;
      deltaXRef.current = 0;
      preventClickRef.current = false;
      if (el.setPointerCapture) {
        try { el.setPointerCapture(e.pointerId); } catch {}
      }
      el.classList.add(styles.dragging);
      // temporarily disable transition for immediate feedback
      track.style.transition = "none";
    }

    function onPointerMove(e) {
      if (!draggingRef.current) return;
      const rawDx = e.clientX - startXRef.current;
      let dx = rawDx;
      // prevent dragging beyond bounds:
      const atFirst = index === 0;
      const atLast = index === slides.length - 1;
      if (atFirst && dx > 0) {
        // block movement to the right when on first slide
        dx = 0;
      } else if (atLast && dx < 0) {
        // block movement to the left when on last slide
        dx = 0;
      }
      deltaXRef.current = dx;
      if (Math.abs(rawDx) > CLICK_THRESHOLD) preventClickRef.current = true;
      track.style.transform = `translateX(calc(${ -index * 100 }% + ${dx}px))`;
    }

    function onPointerUp(e) {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      const dx = deltaXRef.current;
      try { if (el.releasePointerCapture) el.releasePointerCapture(e.pointerId); } catch {}
      // restore transition and decide snap/slide
      track.style.transition = "";
      if (Math.abs(dx) >= THRESHOLD) {
        if (dx < 0 && index < slides.length - 1) next();
        else if (dx > 0 && index > 0) prev();
        else {
          // if at bounds, snap back
          track.style.transform = `translateX(${ -index * 100 }%)`;
        }
      } else {
        // snap back
        track.style.transform = `translateX(${ -index * 100 }%)`;
      }
      deltaXRef.current = 0;
      setTimeout(() => el.classList.remove(styles.dragging), 50);
    }

    // pointer events
    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // touch fallback for older UAs (map to same handlers)
    function touchStart(e) { onPointerDown(e.changedTouches ? e.changedTouches[0] : e); }
    function touchMove(e) { onPointerMove(e.changedTouches ? e.changedTouches[0] : e); }
    function touchEnd(e) { onPointerUp(e.changedTouches ? e.changedTouches[0] : e); }
    el.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: true });
    window.addEventListener("touchend", touchEnd, { passive: true });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [index, slides.length]);

  // prevent Link navigation when user dragged the carousel
  function onCarouselLinkClick(e) {
    if (preventClickRef.current) {
      e.preventDefault();
      e.stopPropagation();
      preventClickRef.current = false;
    } else {
      window.scrollTo(0, 0);
    }
  }

  return (
    <section
      className={styles.wrap}
      id="intro"
      aria-label="sezione riassuntiva del sito"
    >
      <div className={styles.gradient}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.intro1}>
            <p className={styles.line}>
              <strong className={styles.glow}>Future Frames</strong> è
              un'agenzia creativa specializzata in
              <span className={styles.glow}> fotografia</span> e
              <span className={styles.glow}> videomaking </span> professionale.
            </p>
            <span className={styles.intro1img}>
              <img src="/images/introimg3.webp" alt="" />
              <img src="/images/introimg4.webp" alt="" />
              <img src="/images/introimg5.webp" alt="" />
              <img src="/images/introimg6.webp" alt="" />
            </span>
          </div>

          <div className={styles.intro2}>
            <p className={styles.line}>
              Diamo forma ai tuoi momenti e alla tua
              <span className={styles.glow}> identitá</span>
            </p>
            <img src="/images/introimg1.webp" alt="" />
            <p className={styles.line}>
              con immagini che comunicano e
              <span className={styles.glow}> restano nel tempo.</span>
              <Link to="/portfolio" className={styles.portfolioLink}>
                <p>
                  SCOPRI IL NOSTRO PORTFOLIO{" "}
                  <i className="fa-solid fa-circle-arrow-right"></i>
                </p>
              </Link>
            </p>
          </div>

          <div className={styles.intro3title}>
            <h3>I NOSTRI SERVIZI</h3>
          </div>

          <div className={styles.intro3}>
            <Link to="/servizi" aria-label="Vai alla pagina dei servizi" onClick={onCarouselLinkClick}>
              <div
                className={styles.carousel}
                ref={carouselRef}
                aria-roledescription="carousel"
              >
                <div className={styles.carouselViewport}>
                  <div
                    className={styles.track}
                    ref={trackRef}
                    style={{ transform: `translateX(${ -index * 100 }%)` }}
                  >
                    {slides.map((s, i) => (
                      <figure
                        key={i}
                        className={styles.slide}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} di ${slides.length}`}
                        style={{
                          backgroundImage: `url(${s.img})`,
                        }}
                      >
                        <div className={styles.carouselGradient}>
                          <div className={styles.carouselTxt}>
                            <span className={styles.visuallyHidden} aria-hidden="false">
                              {s.title}
                            </span>
                            <figcaption className={styles.slideCaption}>
                              <p className={styles.slideText}>{s.text}</p>
                            </figcaption>
                          </div>
                        </div>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.carouselBtn}>
            <button
              className={`${styles.arrow} ${index === 0 ? styles.arrowDisabled : ""}`}
              onClick={prev}
              aria-label="Slide precedente"
              aria-disabled={index === 0}
              disabled={index === 0}
            >
              ‹
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight} ${index === slides.length - 1 ? styles.arrowDisabled : ""}`}
              onClick={next}
              aria-label="Slide successivo"
              aria-disabled={index === slides.length - 1}
              disabled={index === slides.length - 1}
            >
              ›
            </button>

            <div className={styles.indicators} role="tablist" aria-label="Seleziona slide">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.indicator} ${i === index ? styles.activeIndicator : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Vai alla slide ${i + 1}`}
                  aria-pressed={i === index}
                />
              ))}
            </div>
          </div>

          <Link to="/servizi" className={styles.serviziLink}>
            <p>
              Scopri di piú <i className="fa-solid fa-circle-arrow-right"></i>
            </p>
          </Link>

          <div className={styles.about}>
            <img src="/images/gloria2.jpeg" alt="immagine-gloria" />
            <img src="/images/ivan.jpeg" alt="immagine-ivan" />
          </div>
          <Link to="/about" className={styles.aboutLink}>
            <p>
              Conosci il nostro team{" "}
              <i className="fa-solid fa-circle-arrow-right"></i>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}