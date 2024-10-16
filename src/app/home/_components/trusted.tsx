import truested from "@/assets/images/hero/trusted.png";
import FadeInComponent from "@/components/fade-in";
import { Separator } from "@/components/ui/separator";

function Trusted() {
  return (
    <div className="bg-[#181E1C] lg:py-16 py-8">
      <div className="sm:px-16  grid lg:grid-cols-2 max-w-screen-2xl mx-auto lg:px-16 px-6 mt-3 relative ">
        <Media />
        <Details />
      </div>
    </div>
  );
}

export default Trusted;

function Details() {
  return (
    <FadeInComponent
      className="place-items-start md:mt-8 grid place-content-center"
      direction="up"
    >
      <p className=" bg-primary py-[0.20rem] px-2 rounded-full font-bold text-primary text-[0.60rem] text-white">
        Trusted
      </p>
      <h2 className="font-extrabold text-[35px] leading-[3rem] text-white">
        Powering EV Journeys for a Sustainable Future
      </h2>
      <p className="text-xs mt-2 tracking-wide font-semibold leading-5 text-muted/70">
        At ChargeAway, we're dedicated to driving the transition to electric mobility. With a focus on innovation and user satisfaction, our EV charging solutions have powered thousands of vehicles, helping build a cleaner and greener future.
      </p>

      <div className="flex sm:gap-x-12 gap-x-4 mt-6">
        <ValueView title="1200+" description="Charging Sessions" />
        <ValueView title="4.7" description="Ratings" />
        <ValueView title="10+" description="Cities" />
      </div>
    </FadeInComponent>
  );
}

interface IValueView {
  title: string;
  description: string;
}

function ValueView({ title, description }: IValueView) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-extrabold text-white">{title}</h3>
      <Separator className="my-1" />
      <span className="text-white/80 text-sm">{description}</span>
    </div>
  );
}

function Media() {
  return (
    <FadeInComponent
      direction="left"
      className="w-full order-last lg:order-first lg:mr-auto lg:mx-0 mx-auto mt-12 lg:mt-0"
    >
      <img
        alt="trusted"
        loading="lazy"
        src={truested}
        className="max-w-[25rem]  w-full"
      />
    </FadeInComponent>
  );
}
