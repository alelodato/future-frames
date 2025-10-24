import styles from "./Servizi.module.css";
import aziendeVideo from "../assets/videos/ToyotaXReply.mp4";

export default function Servizi() {
  return (
    <section>
      <div className={styles.wrap}>
        <div className={styles.gradient}>
          <div className={styles.intro}>
            <p className={styles.introP2}>
              Con<strong> CREATIVITA'</strong>,
              <strong> QUALITA' PROFESSIONALE</strong> e
              <strong> MASSIMA AFFIDABILITA'</strong>, accompagniamo ogni
              passaggio — dalla prima ripresa al risultato finale
            </p>
          </div>
        </div>
      </div>
      <section className={styles.servizi}>
        <div className={styles.eventi}>
          <div className={styles.gradient}>
            <h3>
              DAL <strong>BACKSTAGE</strong> AL <strong>MOMENTO</strong> CLOU:
            </h3>
            <h4>
              Raccontiamo l'<strong>ENERGIA</strong> dei tuoi eventi con{" "}
              <strong>IMMAGINI</strong> che coinvolgono e restano.
            </h4>
            <div className={styles.eventip}>
              <h5 className={styles.eventip1}>
                Fotografia e video per eventi privati e aziendali.
              </h5>
              <h5 className={styles.eventip2}>
                Copertura completa con scatti spontanei e riprese dinamiche.
              </h5>
              <h5 className={styles.eventip3}>
                Ideale per feste, lanci di prodotto, eventi culturali,
                convention.
              </h5>{" "}
            </div>
          </div>
        </div>
        <div className={styles.aziende}>
          <div className={styles.gradient}>
            <h3 className={styles.aziendeTitle}>
              CONTENUTI VISIVI <br /> <strong>SU MISURA</strong> CHE RAFFORZANO
              L'<strong>IDENTITÀ</strong> DEL TUO BRAND <br />
            </h3>
            <video
              className={styles.aziendeVideo}
              src={aziendeVideo}
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <h3 className={styles.aziendeTitle2}>
              E <strong>PARLANO</strong> DIRETTAMENTE AL TUO PUBBLICO.
            </h3>

            <h4>
              Raccontiamo la tua azienda con immagini che non si limitano a
              mostrare, ma comunicano <strong>VALORE</strong>.
            </h4>
            <img src="/images/azienda.webp" alt="immagine-sezione-aziende" className={styles.imgAziende} />
            <p className={styles.aziendep}>
              {" "}
              Dai ritratti corporate ai video istituzionali, fino agli
              spot pubblicitari e ai contenuti social, ogni progetto è studiato
              per valorizzare la tua identità e distinguerti sul mercato.
            </p>
            <h4 className={styles.aziendeTitle3}>COSA POSSIAMO REALIZZARE PER TE:</h4>
            <h5 className={styles.istituzionali}>
              Video istituzionali e corporate: per presentare l'azienda, i
              valori e le persone dietro al brand.
            </h5>
            <img src="" alt="" />
            <h5 className={styles.spot}>
              Spot pubblicitari e social video: contenuti brevi e di impatto per
              campagne e distribuzione digitale.
            </h5>
            <img src="" alt="" />
            <h5 className={styles.ritratti}>
              Ritratti e fotografia aziendale: immagini professionali di team,
              sedi, prodotti e processi.
            </h5>
            <img src="" alt="" />
            <h5 className={styles.branding}>
              Contenuti per employer branding: video e foto che raccontano la
              cultura aziendale e attraggono talenti.
            </h5>
            <img src="" alt="" />
            <h5 className={styles.shooting}>
              Shooting prodotto/servizio: still-life e foto ambientate per
              cataloghi, e-commerce e materiale promozionale.
            </h5>
            <img src="" alt="" className={styles.imgAziende2}/>
          </div>
        </div>
        <div className={styles.cerimonie}>
          <div className={styles.gradient}>
            <h3>
              I momenti più importanti meritano di essere ricordati per sempre,
              con emozioni vere e spontanee.
            </h3>
            <p>
              Servizi foto e video per: matrimoni, battesimi, 18esimi,
              anniversari di matrimonio Stile elegante, reportage naturale,
              attenzione ai dettagli e ai momenti autentici.
            </p>
          </div>
        </div>
        <div className={styles.food}>
          <div className={styles.gradient}>
            <h3>
              Ogni piatto diventa un'immagine che conquista lo sguardo e
              racconta la tua cucina.
            </h3>
            <p>
              Shooting fotografico e video per ristoranti, chef e aziende del
              settore. Immagini per menu, social, campagne pubblicitarie.
              Riprese video con focus su estetica e storytelling del piatto.
            </p>
          </div>
        </div>
        <div className={styles.montaggio}>
          <div className={styles.gradient}>
            <h3>Dove le immagini trovano ritmo, senso e impatto.</h3>
            <p>
              Post-produzione e editing professionale per: spot pubblicitari
              videoclip musicali documentari cinematografici e televisivi
              progetti cinematografici
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
