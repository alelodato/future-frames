import "./styles/global.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App(){
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
