import logoTypography from "@/assets/images/logo/logo_typography.png";

function Logo() {
  return (
    <a href="/"><img alt="Logo" src={logoTypography} className="md:h-[50px] h-[40px] flex -left-3 md:-left-5 -top-[0.38rem] md:-top-[0.45rem]" /></a>
    // <div className="md:h-[70px] h-[40px] relative items-center justify-center">
    //   <img alt="Logo" src={logoTypography} className="h-full absolute -left-3 md:-left-5 -top-[0.38rem] md:-top-[0.45rem]" />
    //   {/* <div className="rounded-t-lg rounded-tl-full rounded-bl-full bg-primary text-sm w-full sm:text-xl text-[#f8e172] px-2 pl-6 md:pl-11 py-0 md:py-1">
    //     <img alt="Logo" src={logoTypography} className="h-full absolute -left-3 md:-left-5 -top-[0.38rem] md:-top-[0.45rem]" />
    //   </div> */}
    // </div>
  );
}

export default Logo;
