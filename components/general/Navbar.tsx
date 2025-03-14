import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex py-5 items-center justify-between ">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-600">App</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-500 transition-colors"
            href="/dashboard"
          >
            Dashborad
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button className="cursor-pointer" variant={"default"}>
          Login
        </Button>
        <Button className="cursor-pointer" variant={"outline"}>
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
