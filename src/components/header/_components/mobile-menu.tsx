import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";

const mobileMenu = [
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
  },
];

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="md:hidden block">
          <MenuIcon className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-3">
        <SheetHeader className="flex flex-col justify-start">
          <SheetTitle>Quick Menu</SheetTitle>
          <SheetDescription>
            Click here to navigate the screen.
          </SheetDescription>
        </SheetHeader>

        <Separator className="my-3" />

        <div className="flex flex-col gap-y-3">
          {mobileMenu.map((v) => {
            return (
              <SheetClose asChild>
                <Link className="font-medium text-lg" to={v.href}>
                  {v.title}
                </Link>
              </SheetClose>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
