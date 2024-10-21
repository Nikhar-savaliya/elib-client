import { BookOpenText } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto py-4 px-2 flex items-center justify-between ">
        {/* LOGO */}
        <Link href={"/"}>
          <Logo />
        </Link>
        {/* BUTTONS */}
        <Link href={"https://elib-dashboard-eight.vercel.app/"}>
          <Button className="flex items-center justify-center gap-1">
            Upload a Book
          </Button>
        </Link>
        {/* <div className="flex items-center gap-4">
          <Link href={"/login"}>
            <Button
              variant={"default"}
              className="flex items-center justify-center gap-1"
            >
              Login
            </Button>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <BookOpenText className="text-primary pt-0.5" />
      <span className="tracking-tighter font-bold text-2xl text-foreground">
        eLibrary
      </span>
    </div>
  );
};

export default Header;
