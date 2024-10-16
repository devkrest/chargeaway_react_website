import person from "@/assets/images/hero/person.png";

function TeamPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className=" sm:px-16 px-6 grid max-w-screen-2xl mx-auto py-8  lg:py-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-primary">Our Team</h1>
          <p className="tracking-wide text-lg text-black/60">
            The Faces Behind Our Success
          </p>
          <div className="mt-2 w-32 h-[0.15rem] bg-primary rounded-full" />
        </div>
        <Gallery />
      </div>
    </div>
  );
}

export default TeamPage;

const details: IGalleryImage[] = [
  {
    name: "Mr. Hanutram Ji Bhati (late)",
    path: person,
  },
  {
    name: "Mr. Sohanlal Bhati",
    path: person,
  },
  {
    name: "Mr. Kamal Kishore Bhati",
    path: person,
  },
  {
    name: "Mr. Suresh kumar Bhati",
    path: person,
  },
  {
    name: "Mr. Karthik Bhati ",
    path: person,
  },
  {
    name: "Mr. Rithik Bhati",
    path: person,
  },
];

function Gallery() {
  return (
    <div className="flex flex-wrap gap-12 md:gap-16 justify-center mt-12 ">
      {details.map((v, i) => (
        <GalleryImage key={i} {...v} />
      ))}
    </div>
  );
}

interface IGalleryImage {
  name: string;
  path: string;
}

function GalleryImage({ name, path }: IGalleryImage) {
  return (
    <div className="flex flex-col items-center  shadow-md rounded-xl">
      <img alt={name} src={path} className="rounded-t-xl w-60" />
      <p className="py-5 font-semibold lg:text-base text-sm">{name}</p>
    </div>
  );
}
