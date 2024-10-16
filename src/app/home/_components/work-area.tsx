import finance from "@/assets/images/hero/finance.svg";
import research from "@/assets/images/hero/research.svg";
import source from "@/assets/images/hero/source.svg";
import trading from "@/assets/images/hero/trading.svg";
import FadeInComponent from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { JSX } from "react";
import { useNavigate } from "react-router-dom";

function WordArea() {
  return (
    <div className="lg:py-24 py-12 bg-[#f5fffd]">
      <div className="grid lg:grid-cols-2 sm:px-16 px-6 max-w-screen-2xl mx-auto mt-3 relative ">
        <Details />
        <Media />
      </div>
    </div>
  );
}

export default WordArea;

function Details() {
  const navigate = useNavigate();
  return (
    <FadeInComponent className=" lg:pr-6" direction="up">
      <p className="bg-[#def5f07e] inline p-2 rounded-lg font-bold text-primary text-sm">
        OUR CHARGING NETWORK
      </p>
      <h2 className="font-extrabold md:text-[40px] text-[35px] leading-[3rem] mt-6">
        Powering up with the leading EV charging provider.
      </h2>
      <p className="text-base mt-2 tracking-wide leading-6">
        ChargeAway has rapidly expanded its EV charging network, offering reliable charging solutions nationwide. Known for its cutting-edge technology and customer-centric approach, ChargeAway ensures smooth journeys for thousands of EV drivers every day.
      </p>

      <Button
        onClick={() => navigate("contact-us")}
        className="w-36 mt-8 bg-white shadow-none border border-primary text-primary font-medium lg:mb-0 mb-10"
      >
        Let’s Connect
      </Button>
    </FadeInComponent>
  );
}

function Media() {
  return (
    <FadeInComponent
      className="w-full lg:ml-auto shadow-box-soft max-w-[500px] max-h-[500px] bg-white flex flex-col overflow-hidden border border-gray-100 md:rounded-[2.5rem] rounded-xl"
      direction="up"
    >
      <MediaFlow
        left={<MediaItem media={trading} title="Trading" />}
        right={<MediaItem media={source} title="Sourcing & Supplying" />}
      />
      <Separator className="bg-primary" />
      <MediaFlow
        left={<MediaItem media={finance} title="Finance" />}
        right={<MediaItem media={research} title="Research" />}
      />
    </FadeInComponent>
  );
}

interface IMediaFlow {
  left: JSX.Element;
  right: JSX.Element;
}

function MediaFlow({ left, right }: IMediaFlow) {
  return (
    <div className="flex-1 flex justify-between items-center">
      {left}
      <Separator orientation="vertical" className="bg-[#00937868] " />
      {right}
    </div>
  );
}

interface IMediaItem {
  title: string;
  media: string;
}
function MediaItem({ media, title }: IMediaItem) {
  return (
    <div className="hover:bg-[#def5f053] transition-colors duration-500 group relative  flex-1 flex lg:gap-y-3 gap-y-2 py-3 lg:py-0 items-center flex-col h-full group justify-center">
      <div className="lg:h-20 lg:w-20 h-16 w-16 group-hover:h-16 group-hover:w-16 lg:group-hover:h-24 lg:group-hover:w-24 relative z-10 before:-z-0 before:rounded-full before:h-0 origin-bottom before:origin-top group-hover:before:h-[50%] overflow-hidden before:bottom-0 before:transition-all transition-all duration-500 before:duration-500  before:absolute before:w-full before:bg-[#def5f01c] rounded-full bg-primary   flex items-center justify-center">
        <img alt={title} src={media} className="h-8 lg:h-11 z-40" />
      </div>
      <p className="font-bold text-center text-[13px] lg:text-base">{title}</p>
    </div>
  );
}
