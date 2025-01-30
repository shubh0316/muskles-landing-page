"use client"
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MusklesSection from "@/app/components/MusklesSection";
import AboutSection from "@/app/components/AboutSection";
import MemecoinSection from "@/app/components/MemecoinSection";
import StuffSection from "@/app/components/StuffSection";

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
      <MusklesSection />
      <AboutSection />
      <MemecoinSection />
      <StuffSection />
    </>
  );
}
