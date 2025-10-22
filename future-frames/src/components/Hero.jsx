import styles from "./Hero.module.css";
import videoBg from "../assets/videos/ShowreelAgg.2025.mp4";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Future Frames hero">
      <video className={styles.video} src={videoBg} autoPlay loop muted playsInline></video>
      <div className={styles.overlay}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.title}>
            LA VISIONE
            <br />
            PRENDE FORMA.
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
