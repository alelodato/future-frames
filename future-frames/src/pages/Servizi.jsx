import styles from "./Servizi.module.css";

export default function Servizi() {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h1>I NOSTRI SERVIZI</h1>
      </div>
      <div className={styles.intro}>
        <p className={styles.introP2}>
          Con<strong> CREATIVITA'</strong>,<strong> QUALITA' PROFESSIONALE</strong> e
          <strong> MASSIMA AFFIDABILITA'</strong>, accompagniamo ogni passaggio —
          dalla prima ripresa al risultato finale
        </p>
        <p className={styles.introP3}>
          Scopri come possiamo valorizzare anche il tuo progetto, un frame alla
          volta.
        </p>
      </div>
    </div>
  );
}
