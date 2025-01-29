"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon from "@/assets/icon.svg";
import Image from "next/image";
import line1 from "@/assets/line.png";
import Container from "./components/Container";
import dex from "@/assets/dex.svg";
import right from "@/assets/right.svg";
import Link from "next/link";
import Navbar from "./Navbar";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
    gsap.fromTo(
      ".second-image",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".second-image",
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
        },
      }
    );
  
    gsap.fromTo(
      ".second-image .container h2, .second-image .container img, .second-image .grid h2, .second-image .grid img",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".second-image",
          start: "top 70%",
          end: "top 30%",
          scrub: 1.5,
        },
      }
    );
  
    // Animation for third section
    gsap.fromTo(
      ".third-image",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".third-image",
          start: "top bottom",
          end: "top 20%",
          scrub: 1.5,
        },
      }
    );
  
    gsap.fromTo(
      ".third-image .container h2, .third-image .container img, .third-image .grid h2, .third-image .grid img",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".third-image",
          start: "top bottom",
          end: "top 30%",
          scrub: 1.5,
        },
      }
    );
    gsap.fromTo(
      ".fourth-image",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fourth-image",
          start: "top 80%",
          end: "top 20%",
          scrub: 1.5,
        },
      }
    );
  
    gsap.fromTo(
      ".fourth-image .container h2, .fourth-image .container img, .fourth-image .grid h2, .fourth-image .grid img",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fourth-image",
          start: "top bottom",
          end: "top 30%",
          scrub: 1.5,
        },
      }
    );
  }, []);
  
  

  return (
    <>
    <Navbar />
      {/* First Background Image */}
      <div className="h-screen w-full bg-[url('/bg.jpg')] sticky top-0 bg-cover bg-center">
        <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto] text-9xl text-white p-4 overflow-hidden bg-cover">
          <div className="flex justify-start">MEET</div>
          <div></div>
          <div className="flex justify-end">MUSKLES</div>
        </div>
      </div>

      {/* Second Background Image */}
      <div className="second-image overflow-y-hidden h-screen w-full sticky top-0 bg-[url('/bg1.jpg')] bg-cover bg-center">
        <Container>
          <div className="container flex flex-col text-center p-4 justify-center items-center space-y-2 text-white h-screen">
            <h2 className="text-[#F7FF00] text-6xl">
              powered by gaming, art, humor, tech, and a love for humanity.
            </h2>
            <Image src={line1} alt="" className="w-1/2" />
            <h2 className="text-white text-4xl">
              we&apos;re just a crafty crew of independent artists
              <br />
              and devs who have worked for these fine studios...
            </h2>
            <Image src={icon} alt=" " className="" />
            <p className="absolute font-sans bottom-8 w-1/2 text-sm text-white text-center">
              *All trademarks, logos and brand names are the property of their
              respective owners and are used for identification purposes only.
              Use of these names, trademarks and brands does not imply
              endorsement and have no direct affiliation.
            </p>
          </div>
        </Container>
      </div>

      {/* Third Background Image */}
    <div className="third-image overflow-y-hidden h-screen w-full sticky top-0 bg-[url('/bg2.jpg')] bg-cover bg-center">
  <Container>
    <div className="container flex text-center p-4 justify-center items-center space-y-2 text-white h-screen">
      <div className="grid grid-cols-2 gap-20">
        <div className="flex flex-col space-y-9">
          <h2 className="text-center text-xl">Fair Launch</h2>
          <h2 className="text-start text-5xl">NO INVESTORS.</h2>
          <h2 className="text-start text-5xl">NO LOCKUPS.</h2>
          <h2 className="text-start text-5xl">NO CABAL.</h2>
          <h2 className="text-start text-5xl">NO KOL.</h2>
          <Image src={dex} alt="" />
        </div>
        <div>
          <Image src={right} alt="" />
        </div>
      </div>
    </div>
  </Container>
</div>

{/*Fourth background Image */}
<div className="fourth-image overflow-y-hidden h-screen w-full sticky top-0 bg-[url('/bg3.jpg')] bg-cover bg-center">
  <Container>
    <div className="container flex flex-col text-center p-4 justify-center items-center space-y-2 text-white h-screen">
      <h2 className="text-6xl w-3/4 text-white">
      WE&apos;RE HARD AT WORK MAKING TOP SECRET STUFF. FOLLOW US ON X FOR CLEARANCE.
      </h2>
      <Link href="https://x.com/musklescoin" target="_blank"> 
      <h2 className="text-[#FF2D84] underline text-4xl">
        @MUSKLESCOIN
        </h2>
        </Link>
    </div>
  </Container>
</div>
    </>
  );
}