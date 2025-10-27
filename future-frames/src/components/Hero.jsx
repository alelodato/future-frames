import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import videoBgMobile from "../assets/videos/Showreel-Mobile.mp4";
import videoBgDesktop from "../assets/videos/Showreel-Desktop.mp4";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Future Frames hero">
      <video
        className={styles.videoMobile}
        src={videoBgMobile}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <video
        className={styles.videoDesktop}
        src={videoBgDesktop}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className={styles.overlay}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.title} data-aos="zoom-in" data-aos-delay="3000">
            LA VISIONE
            <br />
            PRENDE FORMA.
          </h1>
          <div className={styles.ctas}>
            <Link
              to="/portfolio"
              className={`${styles.btn} ${styles.primary}`}
              data-aos="fade-up"
              data-aos-delay="3000"
              onClick={() => window.scrollTo(0, 0)}
            >
              SCOPRI I NOSTRI LAVORI
            </Link>
            <Link
              to="/contact"
              className={`${styles.btn} ${styles.outline}`}
              data-aos="fade-up"
              data-aos-delay="3000"
              onClick={() => window.scrollTo(0, 0)}
            >
              RICHIEDI UN PREVENTIVO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
