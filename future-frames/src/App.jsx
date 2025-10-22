import "./styles/global.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();
  const aosReady = useRef(false);
  useEffect(() => {
    const t = setTimeout(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 80,
      });
      aosReady.current = true;
      AOS.refreshHard();
    }, 5000);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (aosReady.current) AOS.refresh();
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
