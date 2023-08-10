// Components
import { Logo } from "..";

// Internal Imports
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="flex items-end gap-10">
        <Logo />
        <div className="flex items-center gap-4">
          <Link href="/explore">Explore</Link>
          <Link href="/sheets">Sheets</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/discuss">Discuss</Link>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <i className="fa-solid fa-fire text-2xl"></i>
        <div className="w-[30px] h-[30px] rounded-full bg-gray-300 grid place-content-center cursor-pointer">
          <i className="fa-solid fa-user text-black"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
