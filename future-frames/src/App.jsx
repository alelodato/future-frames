import "./styles/global.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
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
