import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // forza scroll a top prima del paint
    const scrollToTop = () => {
      try {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      } catch (e) {}
    };

    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start", behavior: "auto" });
        setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) el2.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 60);
        return;
      }
      scrollToTop();
      return;
    }

    scrollToTop();

    const t = setTimeout(scrollToTop, 120);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}