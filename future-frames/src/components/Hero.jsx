import { useEffect, useState } from "react";
import AOS from "aos";
import styles from "./Hero.module.css";
import videoBg from "../assets/videos/ShowreelAgg.2025.mp4";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);      // sblocca i data-aos
      AOS.refresh();       // ricalcola con i data-aos attivi
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero} aria-label="Future Frames hero">
      <video className={styles.video} src={videoBg} autoPlay loop muted playsInline></video>
      <div className={styles.overlay}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.title} data-aos={ready ? "zoom-in" : ""} data-aos-delay={ready ? "5000" : ""}>
            LA VISIONE
            <br />
            PRENDE FORMA.
          </h1>
          <div className={styles.ctas}>
            <a href="#portfolio" className={`${styles.btn} ${styles.primary}`} data-aos={ready ? "fade-up" : ""} data-aos-delay={ready ? "5200" : ""}>
              SCOPRI I NOSTRI LAVORI
            </a>
            <a href="#contatti" className={`${styles.btn} ${styles.outline}`} data-aos={ready ? "fade-up" : ""} data-aos-delay={ready ? "5200" : ""}>
              RICHIEDI UN PREVENTIVO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
