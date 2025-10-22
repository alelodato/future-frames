import { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const LINKS = [
  { to: "/about", label: "CHI SIAMO" },
  { to: "/portfolio", label: "PORTFOLIO" },
  { to: "/servizi",  label: "SERVIZI" },
  { to: "/contact", label: "CONTATTI" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.style.overflow = "hidden";
    else root.style.overflow = "";
    return () => (root.style.overflow = "");
  }, [open]);

  const onKeyDown = useCallback((e) => {
    if (e.key === "Escape") setOpen(false);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.solid : styles.transparent}`}>
      <div className={`container ${styles.row}`}>
        <NavLink to="/" className={styles.logo} onClick={close}>
          FUTURE <span>FRAMES</span>
        </NavLink>

        {/* Desktop links */}
        <nav className={styles.links} aria-label="Navigazione principale">
          {LINKS.map((l) => (
            <NavLink key={l.to} className={styles.link} to={l.to} onClick={close}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button
          className={styles.burger}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Overlay + pannello mobile */}
      <div
        className={`${styles.backdrop} ${open ? styles.show : ""}`}
        onClick={close}
        aria-hidden={!open}
      />
      <nav
        id="mobile-menu"
        className={`${styles.mobile} ${open ? styles.open : ""}`}
        aria-label="Menu mobile"
      >
        {LINKS.map((l) => (
          <NavLink key={l.to} className={styles.mLink} to={l.to} onClick={close}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}