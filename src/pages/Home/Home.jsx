import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Siderbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Slider />
      <Footer />
      <Outlet />
    </>
  );
}
