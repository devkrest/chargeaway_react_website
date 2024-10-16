import ContactUsPage from "../contact-us/page";
import Top from "./_components/top";
import Trusted from "./_components/trusted";
import WorkArea from "./_components/work-area";

function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <Top />
      <Trusted />
      <WorkArea />
      <ContactUsPage/>
    </div>
  );
}

export default HomePage;
