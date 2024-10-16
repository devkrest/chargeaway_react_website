import { useEffect, useState } from "react";
import Logo from "../logo";
import Menu from "./_components/menu";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./_components/mobile-menu";

function HeaderPage() {
  const [sticky, setSticky] = useState(false);
  // handle scroll event
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className={cn(
        "w-full sticky top-0 z-50 bg-white  ",
        sticky && "border-b"
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 py-3 flex justify-between items-center max-w-screen-2xl px-4 lg:px-16 mx-auto",
          sticky && "scale-95"
        )}
      >
        <Logo />
        <Menu />
        <MobileMenu />
      </div>
    </div>
  );
}

export default HeaderPage;
