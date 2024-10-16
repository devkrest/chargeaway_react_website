import OurStory from "@/assets/images/hero/our-story.png";
import FadeInComponent from "@/components/fade-in";

function AboutUsPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="sm:px-16 px-6 grid max-w-screen-2xl mx-auto py-8 lg:py-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-primary">Our Story</h1>
          <p className="tracking-wide mt-2 text-lg text-black/60">
            Who We Are and What Powers Us
          </p>
          <div className="mt-2 w-32 h-[0.15rem] bg-primary rounded-full" />
        </div>
        <Details />
        <div className="bg-[#FAE7B0] p-8 rounded-xl mt-10">
          <p>
            As we charge ahead, we remain committed to the principles that have guided us: innovation, sustainability, and exceptional customer experiences. Our focus is on providing cutting-edge EV charging solutions that are accessible, reliable, and scalable. To learn more about our services or partnership opportunities, feel free to reach out. We look forward to being a part of your electric journey and shaping a sustainable future together.
          </p>
        </div>
      </div>

    </div>
  );
}

export default AboutUsPage;

function Details() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-12">
      <Media />
      <StoryDetails />

    </div>
  );
}

function StoryDetails() {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <p className="font-extrabold text-3xl">ChargeAway</p>
      <p className="rounded-md w-24 h-8 p-1 bg-[#def5f07e] text-primary font-bold flex justify-center">
        Est. 2024
      </p>
      <div className="grid gap-4">
        <p className="text-justify">
          Our company is built on a mission to accelerate the transition to electric mobility by providing innovative and reliable EV charging solutions. From residential users to large-scale commercial clients, we serve a diverse range of needs with technology-driven charging infrastructure.
        </p>
        <p className="text-justify">
          ChargeAway was founded with a vision to create a greener future, and our leadership team is dedicated to that goal. Our founders bring years of expertise in technology and clean energy, guiding the company with a focus on sustainability, innovation, and customer satisfaction.
        </p>
        <p className="text-justify">
          Our success is powered by a commitment to efficiency and user-centric solutions. We understand that seamless charging experiences and accessibility are essential, which is why we’ve developed a network that delivers reliable services nationwide. From individual drivers to corporate fleets, ChargeAway tailors its solutions to meet the unique needs of every user.
        </p>
      </div>
    </div>

  );
}

function Media() {
  return (
    <FadeInComponent
      direction="left"
      className=" justify-self-start  order-last lg:order-first lg:mr-auto lg:mx-0 mx-auto mt-12 lg:mt-0"
    >
      <img
        alt="About us"
        loading="lazy"
        src={OurStory}
        className="lg:max-w-[25rem] w-full drop-shadow-lg"
      // max-w-96 sm:w-[60%]
      />
    </FadeInComponent>
  );
}
