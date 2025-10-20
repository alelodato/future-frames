import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Future Frames hero">
      <div className={styles.overlay}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.title}>
            CATTURIAMO IL FUTURO,
            <br />
            UN FRAME ALLA VOLTA.
          </h1>
          <div className={styles.ctas}>
            <a href="#portfolio" className={`${styles.btn} ${styles.primary}`}>
              SCOPRI I NOSTRI LAVORI
            </a>
            <a href="#contatti" className={`${styles.btn} ${styles.outline}`}>
              RICHIEDI UN PREVENTIVO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
