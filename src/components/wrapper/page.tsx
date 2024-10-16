import Footer from "../footer/page";
//import { MobileMenu } from "../header/_components/mobile-menu/mobile-menu";
import HeaderPage from "../header/page";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { Toaster } from "../ui/toaster";

function Wrapper() {
  return (
    <div className="grid w-full h-full relative">
      <ScrollRestoration />
      <HeaderPage />
      <Outlet />
      {/* <MobileMenu /> */}
      <Footer />
      <Toaster  />
    </div>
  );
}

export default Wrapper;
