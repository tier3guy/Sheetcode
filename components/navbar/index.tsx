import { Logo } from "@/components";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-100 p-4 flex justify-between items-center">
      <Logo />
      {/* Navigation links here */}
      <nav className="flex items-center gap-4">
        <Link href="/">
          <p>Overview</p>
        </Link>
        <Link href="/">
          <p>Problems</p>
        </Link>
        <Link href="/">
          <p>About</p>
        </Link>
        <Link href="/">
          <p>How does it Works</p>
        </Link>
      </nav>
      {/* Login Button */}
      <button
        type="submit"
        className="bg-gray-800 px-6 py-1 text-white text-md"
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
