import { Link } from "react-router-dom";
import styles from "./About.module.css";
import videoBg from "../assets/videos/ShowreelAgg.2025.mp4";
import videoBg2 from "../assets/videos/SpotEneaXAmazonE-Commerce.mp4";
import videoIvan from "../assets/videos/ToyotaXReply.mp4";

function About() {
  return (
    <section className={styles.wrap} id="about" aria-label="sezione chi siamo">
      <div className={styles.title}>
        <h1>
          <span data-aos="fade-right" data-aos-delay="200">
            {" "}
            IL{" "}
          </span>{" "}
          <span data-aos="zoom-in" data-aos-delay="800">
            {" "}
            NOSTRO{" "}
          </span>{" "}
          <span data-aos="fade-left" data-aos-delay="400">
            {" "}
            TEAM{" "}
          </span>
        </h1>
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
                👉 Scopri i suoi lavori su{" "}
                <a
                  href="https://www.instagram.com/gloria.margarino_/"
                  target="_blank"
                >
                  {" "}
                  Instagram
                </a>{" "}
                e{" "}
                <a
                  href="https://www.linkedin.com/in/gloria-margarino-9666b11ba/"
                  target="_blank"
                >
                  {" "}
                  LinkedIn.{" "}
                </a>
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
            <p className={styles.ivanParagraph}>
              Specializzato nel montaggio video e nella post-produzione, Ivan
              unisce <strong>TECNICA</strong> e{" "}
              <strong>SENSIBILITA' ARTISTICA</strong> per dare{" "}
              <strong> RITMO </strong> e <strong> COERENZA NARRATIVA </strong>{" "}
              ai progetti.
            </p>
            <video
              className={styles.videoIvan}
              src={videoIvan}
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <p className={styles.ivanParagraph2}>
              Ogni video è per lui un modo per raccontare emozioni attraverso il
              <strong> MOVIMENTO </strong> e il <strong> SUONO. </strong>
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
              non solo raccontano, ma <strong> COINVOLGONO </strong> e{" "}
              <strong> ISPIRANO. </strong>
            </p>
          </div>
        </div>
        <div className={styles.values}>
          <div className={styles.gradient}>
            <div className={styles.creAffi}>
              <h4 className={styles.creativita}>CREATIVITA'.</h4>{" "}
              <h4 className={styles.affidabilita}>AFFIDABILITA'.</h4>{" "}
            </div>
            <h4 className={styles.qualita}>QUALITA' PROFESSIONALE.</h4>
            <br />
            <p>
              Ogni progetto è guidato da <strong> PASSIONE </strong>,{" "}
              <strong> CURA DEI DETTAGLI </strong> E <strong> RISPETTO </strong>{" "}
              per la visione del cliente — perché ogni storia merita di essere{" "}
              <strong> RICORDATA </strong> nel tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
