import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";

function Footer() {
  return (
    <div className="bg-black w-full">
      <div className="sm:px-16 px-6 flex flex-col max-w-screen-2xl mx-auto py-8">
        <QuickLink />
        <Separator className="my-6 bg-muted/20" />
      </div>
    </div>
  );
}

export default Footer;

function QuickLink() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-y-4">
      <p className="text-white font-bold text-3xl ">ChargeAway</p>
      <Links />
    </div>
  );
}

const menu = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About us",
    href: "about-us",
  },
  // {
  //   title: "Team",
  //   href: "team",
  // },
  {
    title: "Contact us",
    href: "contact-us",
  }, {
    title: "Privacy Policy",
    href: "privacy-policy",
  }, {
    title: "Terms and Conditions",
    href: "terms-and-conditions",
  },
];

function Links() {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-start">
      {menu.map((v, i) => {
        return (
          <Link key={i} className="text-white text-base p-1" to={v.href}>
            {v.title}
          </Link>
        );
      })}
    </div>
  );
}