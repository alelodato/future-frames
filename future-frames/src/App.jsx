import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
