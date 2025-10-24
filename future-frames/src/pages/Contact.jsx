import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

let SERVICE_ID = "";
let TEMPLATE_ID = "";
let PUBLIC_KEY = "";

try {
  SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
} catch (e) {
  // not running under Vite (or import.meta access throws) -> try process.env
  SERVICE_ID = (typeof process !== "undefined" && process.env && process.env.REACT_APP_EMAILJS_SERVICE_ID) || "";
  TEMPLATE_ID = (typeof process !== "undefined" && process.env && process.env.REACT_APP_EMAILJS_TEMPLATE_ID) || "";
  PUBLIC_KEY = (typeof process !== "undefined" && process.env && process.env.REACT_APP_EMAILJS_PUBLIC_KEY) || "";
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    try {
      if (PUBLIC_KEY && typeof emailjs.init === "function") {
        emailjs.init(PUBLIC_KEY);
      }
    } catch (e) {
      // non-blocking
    }
  }, []);

  const isValidEmail = (v) => /^\S+@\S+\.\S+$/.test(v);
  const isValidPhone = (v) => /^\+?[0-9\s().-]{7,20}$/.test(v);

  const nameTrim = name.trim();
  const emailTrim = email.trim();
  const phoneTrim = phone.trim();
  const messageTrim = message.trim();

  const emailValid = isValidEmail(emailTrim);
  const phoneValid = phoneTrim === "" || isValidPhone(phoneTrim);
  const formValid =
    nameTrim.length >= 2 &&
    emailValid &&
    phoneValid &&
    messageTrim.length >= 6;

  async function onSubmit(e) {
    e.preventDefault();
    if (!formValid) return;

    setLoading(true);
    setStatus(null);

    const templateParams = {
      name: nameTrim,
      email: emailTrim,
      phone: phoneTrim,
      message: messageTrim,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY || undefined);
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.wrap ?? ""}>
      <section className={styles.contactSection ?? ""} aria-label="Contatto">
        <h2>Contattaci</h2>

        <form className={styles.form ?? ""} onSubmit={onSubmit} noValidate>
          <label className={styles.field ?? ""}>
            <span>Nome</span>
            <input
              type="text"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              aria-required="true"
              aria-label="Nome"
            />
          </label>

          <label className={styles.field ?? ""}>
            <span>Email</span>
            <input
              type="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-label="Email"
              placeholder="nome@esempio.com"
            />
            {!emailValid && emailTrim.length > 0 && (
              <small className={styles.error ?? ""}>Inserisci un'email valida</small>
            )}
          </label>

          <label className={styles.field ?? ""}>
            <span>Telefono (facoltativo)</span>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-label="Telefono"
              placeholder="+39 345 0000000"
            />
            {!phoneValid && phoneTrim.length > 0 && (
              <small className={styles.error ?? ""}>Inserisci un numero di telefono valido</small>
            )}
          </label>

          <label className={styles.field ?? ""}>
            <span>Messaggio</span>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              minLength={6}
              rows={6}
              aria-required="true"
              aria-label="Messaggio"
              placeholder="Scrivi qui il tuo messaggio..."
            />
          </label>

          <div className={styles.actions ?? ""}>
            <button type="submit" disabled={!formValid || loading} aria-disabled={!formValid || loading}>
              {loading ? "Invio..." : "Invia messaggio"}
            </button>
          </div>

          {status === "success" && <p className={styles.success ?? ""}>Messaggio inviato. <br />
          Ti risponderemo presto.</p>}
          {status === "error" && <p className={styles.error ?? ""}>Errore durante l'invio, riprova.</p>}
        </form>
      </section>
    </main>
  );
}