import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";


interface IMenu {
  title: string;
  href: string;
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
];

function Menu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="md:flex gap-x-8 items-center hidden">
      {menu.map((v, i) => (
        <LinkView {...v} pathname={pathname} key={`menu_${i}`} />
      ))}
      <Button
        className={cn(buttonVariants({ variant: "default" }))}
        onClick={() => navigate("contact-us")}
      >
        Contact us
      </Button>
    </div>
  );
}

export default Menu;

interface ILink extends IMenu {
  pathname: string;
}

function LinkView({ href, title, pathname }: ILink) {
  const p = pathname === "/" ? "/" : pathname.split("/").pop()!;

  console.log(p);
  return (
    <Link
      to={href}
      className={cn(
        "group relative pb-[0.35rem] flex flex-col items-center",
        p === href && "text-primary font-extrabold"
      )}
    >
      {title}
      <div
        className={cn(
          "absolute bottom-0 w-5 scale-x-0 bg-primary rounded-full  transition-all duration-500",
          p === href && "h-1 w-5 scale-x-100",
          p !== href && "group-hover:h-1 group-hover:scale-x-100"
        )}
      />
    </Link>
  );
}

