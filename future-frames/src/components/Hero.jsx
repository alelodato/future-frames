import styles from "./Hero.module.css";
import videoBg from "../assets/videos/ShowreelAgg.2025.mp4";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Future Frames hero">
      <video className={styles.video} src={videoBg} autoPlay loop muted playsInline></video>
      <div className={styles.overlay}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.title} data-aos="zoom-in" data-aos-delay="5000">
            LA VISIONE
            <br />
            PRENDE FORMA.
          </h1>
          <div className={styles.ctas}>
            <a href="#portfolio" className={`${styles.btn} ${styles.primary}`} data-aos="fade-up" data-aos-delay="5200">
              SCOPRI I NOSTRI LAVORI
            </a>
            <a href="#contatti" className={`${styles.btn} ${styles.outline}`} data-aos="fade-up" data-aos-delay="5200">
              RICHIEDI UN PREVENTIVO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
