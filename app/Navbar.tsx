"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".navbar-trigger",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="navbar-trigger"></div>

      <nav className="navbar fixed top-0 left-0 w-full p-4 bg-transparent z-50 text-white">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Muskles</Link>
          <div className="flex space-x-6">
            <Link href="#about" className="hover:text-[#FF2D84]">About</Link>
            <Link href="#memecoin" className="hover:text-[#FF2D84]">Memecoin</Link>
            <Link href="#contact" className="hover:text-[#FF2D84]">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
