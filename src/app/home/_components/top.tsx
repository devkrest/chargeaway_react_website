import evIntro from "@/assets/images/hero/ev_intro.png";
import FadeInComponent from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Top() {
  return (
    <div className="sm:px-16 px-6 grid lg:grid-cols-2 max-w-screen-2xl mx-auto md:pt-12 mb-6 pt-6 relative ">
      <Details />
      <Media />
    </div>
  );
}

export default Top;

function Details() {
  const navigate = useNavigate();
  return (
    <FadeInComponent className="sm:mt-8 lg:mb-0 mb-8" direction="up">
      <p className="mb-4 font-bold text-primary underline underline-offset-8 decoration-black decoration-[2px]">
        EV Infrastructure
      </p>
      <h1 className="font-extrabold sm:text-[40px] text-[35px] leading-[3rem]">
        <span className="text-primary font-extrabold">Empowering</span>{" "}
        Future of Mobility:{" "}
        <span className="text-primary font-extrabold">ChargeAway</span>
      </h1>
      <p className="text-base mt-6">
        ChargeAway is designed to meet the evolving needs of electric vehicle owners, offering a seamless and efficient charging experience. With a focus on innovation and user convenience, ChargeAway ensures reliable access to charging stations across a wide network. Built with a commitment to sustainability and excellence, we aim to empower the future of mobility by making electric vehicle charging simple, accessible, and dependable. Experience the next generation of green energy with ChargeAway.
      </p>
      <Button onClick={() => navigate("contact-us")} className="w-36 mt-8">
        Get In Touch
      </Button>
    </FadeInComponent>
  );
}

function Media() {
  return (
    <FadeInComponent
      direction="left"
      className="flex lg:justify-end w-full lg:justify-self-end"
    >
      <img
        alt="Cover image"
        loading="lazy"
        src={evIntro}
        className="w-full max-w-[25rem] rounded-3xl"
      />
    </FadeInComponent>
  );
}
