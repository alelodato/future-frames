import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section
      className={styles.wrap}
      id="intro"
      aria-label="sezione riassuntiva del sito"
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro1}>
          <p className={styles.line}>
            <strong className={styles.glow}>Future Frames</strong> è un'agenzia
            creativa specializzata in
            <span className={styles.glow}> fotografia</span> e
            <span className={styles.glow}> videomaking </span> professionale.
          </p>
          <img src="/images/introimg3.webp" alt="" />
          <img src="/images/introimg4.webp" alt="" />
          <img src="/images/introimg5.webp" alt="" />
          <img src="/images/introimg6.webp" alt="" />
        </div>
        <div className={styles.intro2}>
          <p className={styles.line}>
            Diamo forma ai tuoi momenti e alla tua
            <span className={styles.glow}> identitá</span>,
          </p>
          <p className={styles.line}>
            con immagini che comunicano e
            <span className={styles.glow}> restano nel tempo.</span>
            <span className={styles.intro2img}>
            <img src="/images/introimg1.webp" alt="" />
            <img src="/images/introimg2.webp" alt="" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
