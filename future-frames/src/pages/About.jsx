import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.wrap} id="about" aria-label="sezione chi siamo">
      <div className={styles.title}>
        <h1>CHI SIAMO</h1>
      </div>
      <div className={styles.gloria}>
        <div className={styles.paragraph}>
          <div className={styles.titleImage}>
            <h2>
              <strong>Gloria Margarino</strong> <br /> Co-founder di Future
              Frames, fotografa e videomaker.
            </h2>
            <img src="/images/introimg4.webp" alt="immagine-gloria" />
          </div>
          <p>
            Da sempre appassionata di immagini e storytelling visivo, Gloria
            trasforma momenti autentici in composizioni che comunicano emozione
            e identità. Con un occhio attento alla luce e ai dettagli, cattura
            l'essenza di ogni storia, fondendo estetica e spontaneità. <br />
            👉 Scopri i suoi lavori su
             <a href="https://www.instagram.com/gloria.margarino_/"> Instagram
            </a> e
             <a href="https://www.linkedin.com/in/gloria-margarino-9666b11ba/"> LinkedIn.
            </a>
          </p>
        </div>
      </div>
      <div className={styles.ivan}>
        <div className={styles.paragraph}>
          <div className={styles.titleImage}>
            <h2>
              <strong>Ivan Scrofani</strong> <br /> Co-founder di Future Frames
              e Video Editor.
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
    </section>
  );
}

export default About;
