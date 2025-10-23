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
      title: "SERVIZIO 4",
      text: "Descrizione del quarto servizio, post-produzione e coerenza.",
    },
    {
      img: "/images/montaggio.webp",
      title: "SERVIZIO 5",
      text: "Descrizione del quinto servizio, strategia e risultato.",
    },
  ];

  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(slides.length - 1, i + 1));
  const goTo = (i) => setIndex(i);

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
              <span className={styles.intro2img}></span>
            </p>
          </div>
          <div className={styles.intro3title}>
            <h3>I NOSTRI SERVIZI</h3>
          </div>
          <div className={styles.intro3}>
            <div
              className={styles.carousel}
              ref={carouselRef}
              aria-roledescription="carousel"
            >
              <div className={styles.carouselViewport}>
                {slides.map((s, i) => (
                  <figure
                    key={i}
                    className={styles.slide}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} di ${slides.length}`}
                    style={{
                      display: i === index ? "block" : "none",
                      backgroundImage: `url(${s.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className={styles.carouselGradient}>
                      <span
                        className={styles.visuallyHidden}
                        aria-hidden="false"
                      >
                        {s.title}
                      </span>
                      <figcaption className={styles.slideCaption}>
                        <h4 className={styles.slideTitle}>{s.title}</h4>
                        <p className={styles.slideText}>{s.text}</p>
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.carouselBtn}>
            <button
              className={`${styles.arrow} ${
                index === 0 ? styles.arrowDisabled : ""
              }`}
              onClick={prev}
              aria-label="Slide precedente"
              aria-disabled={index === 0}
              disabled={index === 0}
            >
              ‹
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight} ${
                index === slides.length - 1 ? styles.arrowDisabled : ""
              }`}
              onClick={next}
              aria-label="Slide successivo"
              aria-disabled={index === slides.length - 1}
              disabled={index === slides.length - 1}
            >
              ›
            </button>
            <div
              className={styles.indicators}
              role="tablist"
              aria-label="Seleziona slide"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.indicator} ${
                    i === index ? styles.activeIndicator : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Vai alla slide ${i + 1}`}
                  aria-pressed={i === index}
                />
              ))}
            </div>
          </div>
          <div className={styles.introButtons}>
            <Link to="/about">
              <div className={styles.about}>
                <div className={styles.gradient}>
                  <p className={styles.aboutBtn}>Conosci il nostro team</p>
                </div>
              </div>
            </Link>
            <Link to="/contact">
              <div className={styles.contact}>
                <div className={styles.gradient}>
                  <p className={styles.contactBtn}>Contattaci</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
