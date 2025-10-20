import styles from "./Navbar.module.css";

export default function Navbar(){
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.row}`}>
        <div className={styles.logo}>FUTURE&nbsp;<span>FRAMES</span></div>
        <nav className={styles.links}>
          <a className={styles.link} href="#chi-siamo">CHI SIAMO</a>
          <a className={styles.link} href="#portfolio">PORTFOLIO</a>
          <a className={styles.link} href="#servizi">SERVIZI</a>
          <a className={styles.link} href="#contatti">CONTATTI</a>
        </nav>
      </div>
    </header>
  );
}

