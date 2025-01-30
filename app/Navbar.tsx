"use client";

import Link from "next/link";

export default function Navbar() {
  
  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-4 bg-transparent z-50 text-white">
        <div className="flex  md:text-4xl justify-between items-center">
          <Link href="#muskles" className="">Muskles</Link>
            <Link href="#about" className="">About</Link>
            <Link href="#memecoin" className="">Memecoin</Link>
            <Link href="#stuff" className="">Stuff</Link>
        </div>
      </nav>
    </>
  );
}
