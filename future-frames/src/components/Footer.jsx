import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerTitle}>© 2025 Future Frames. <br />
            Tutti i diritti riservati.</p>
            <p className={styles.footerSubtitle}>Sito Web By <a href="https://www.alessiolodato.dev" target="_blank"><strong>Alessio Lodato</strong></a></p>
        </footer>
    )
}