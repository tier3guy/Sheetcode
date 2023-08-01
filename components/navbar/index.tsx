"use client";

import { Logo, Button } from "@/components";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-100 py-6 flex justify-between items-center">
      <Logo />
      {/* Navigation links here */}
      <nav className="flex items-center gap-4">
        <Link href="/">
          <p className="text-lg">Overview</p>
        </Link>
        <Link href="/problems">
          <p className="text-lg">Problems</p>
        </Link>
        <Link href="/#about">
          <p className="text-lg">About</p>
        </Link>
        <Link href="/">
          <p className="text-lg">How does it Works</p>
        </Link>
      </nav>
      {/* Login Button */}
      <button
        type="submit"
        className="bg-gray-800 px-6 py-2 text-md text-white"
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
