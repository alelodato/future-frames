import { Link } from "react-router-dom";
import styles from "./About.module.css";
import videoBg from "../assets/videos/ShowreelAgg.2025.mp4";
import videoBg2 from "../assets/videos/SpotEneaXAmazonE-Commerce.mp4";

function About() {
  return (
    <section className={styles.wrap} id="about" aria-label="sezione chi siamo">
      <div className={styles.navTitle}>
        <div className={styles.title}>
          <div className={styles.gradient}>
            <h1>CHI SIAMO</h1>
          </div>
        </div>
      </div>
      <div className={styles.gloria}>
        <video
          className={styles.video}
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className={styles.gradientParagraph}>
          <div className={styles.paragraph}>
            <div className={styles.titleImage}>
              <h2>
                <strong>Gloria Margarino</strong> <br /> Co-founder di Future
                Frames, fotografa e videomaker.
              </h2>
              <img src="/images/introimg4.webp" alt="immagine-gloria" />
            </div>
            <p className={styles.gloriaParagraph}>
              Da sempre appassionata di immagini e storytelling visivo, Gloria
              trasforma momenti autentici in composizioni che comunicano
              <strong> emozione </strong> e <strong> identità </strong>.
            </p>
            <div className={styles.gloriaimg}>
              <img src="/images/gloria2.jpeg" alt="immagine-gloria2" />
              <img src="/images/gloria3.png" alt="immagine-gloria3" />
            </div>
            <p className={styles.gloriaParagraph2}>
              Con un occhio attento alla <strong> luce </strong> e ai
              <strong> dettagli </strong>, cattura l'essenza di ogni storia,
              fondendo <strong> estetica </strong> e
              <strong> spontaneità </strong>. <br />
              <p className={styles.gloriaParagraph3}>
                👉 Scopri i suoi lavori su <a
                  href="https://www.instagram.com/gloria.margarino_/"
                  target="_blank"
                > Instagram
                </a> e <a
                  href="https://www.linkedin.com/in/gloria-margarino-9666b11ba/"
                  target="_blank"
                >  LinkedIn. </a>
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.ivan}>
        <video
          className={styles.video}
          src={videoBg2}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className={styles.gradientParagraph}>
          <div className={styles.paragraph}>
            <div className={styles.titleImage}>
              <h2>
                <strong>Ivan Scrofani</strong> <br /> Co-founder di Future
                Frames e Video Editor.
              </h2>
              <img src="/images/ivan.jpeg" alt="immagine-ivan" />
            </div>
            <p>
              Specializzato nel montaggio video e nella post-produzione, Ivan
              unisce tecnica e sensibilità artistica per dare ritmo e coerenza
              narrativa ai progetti. Ogni video è per lui un modo per raccontare
              emozioni attraverso il movimento e il suono.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.missionValues}>
        <div className={styles.mission}>
          <div className={styles.gradient}>
            <h3>LA NOSTRA MISSIONE</h3>
            <p className={styles.missionFirst}>
              Trasformare <strong> momenti</strong> ed
              <strong> esperienze</strong> in <strong> immagini</strong> che
              lasciano un
              <strong> segno.</strong>
            </p>
            <br />
            <p className={styles.missionSecond}>
              Future Frames nasce con l'obiettivo di creare contenuti visivi che
              non solo raccontano, ma coinvolgono e ispirano.
            </p>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.gradient}>
            <h4 className={styles.creativita}>CREATIVITA'.</h4>{" "}
            <h4 className={styles.affidabilita}>AFFIDABILITA'.</h4>{" "}
            <h4 className={styles.qualita}>QUALITA' PROFESSIONALE.</h4>
            <br />
            <p>
              Ogni progetto è guidato da <strong> passione</strong>,{" "}
              <strong> cura dei dettagli</strong> e <strong> rispetto</strong>{" "}
              per la visione del cliente — perché ogni storia merita di essere{" "}
              <strong>ricordata</strong> nel tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
