"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // GSAP animation for the second image to "come up" on scroll
    gsap.to(".second-image", {
      scrollTrigger: {
        trigger: ".second-image", // The second image element
        start: "top bottom", // When the top of the second image enters the bottom of the viewport
        end: "top top", // When the top of the second image reaches the top of the viewport
        scrub: 1, // Slow down the scrolling effect by setting a duration in seconds (e.g., 1 second)
      },
      y: 0, // Move the second image into its original position
      opacity: 1, // Fade in the second image
    });

    // Initial state for the second image
    gsap.set(".second-image", { y: 100, opacity: 0 });

    // GSAP animation for the text inside the second image
    gsap.fromTo(
      ".second-image h2", // Target all h2 elements inside .second-image
      {
        y: 1250, // Start from 1250px below the screen (adjust this value as needed)
        opacity: 0, // Start with 0 opacity
      },
      {
        y: 0, // Move to the center position (0 is the normal position)
        opacity: 1, // Fully visible
        stagger: 0.5, // Stagger between animations for each h2
        scrollTrigger: {
          trigger: ".second-image", // Trigger when the second image is in view
          start: "top bottom", // Start when the top of the second image enters the bottom of the viewport
          end: "top top", // End when the center of the second image reaches the center of the viewport
          scrub: 4, // Slow down the animation with 1 second delay
        },
      }
    );
  }, []);

  return (
    <>
      {/* First Background Image */}
      <div className="h-screen w-full bg-[url('/bg.jpg')] sticky top-0 bg-cover bg-center">
        <div className="h-[100dvh] grid grid-rows-[auto_1fr_auto] text-9xl text-white p-4 overflow-hidden bg-cover">
          <div className="flex justify-start">MEET</div>
          <div></div>
          <div className="flex justify-end">MUSKLES</div>
        </div>
      </div>

      {/* Second Background Image */}
      <div className="second-image h-screen w-full sticky top-0  bg-[url('/bg1.jpg')] bg-cover bg-center">
        <div
          className="flex flex-col text-center justify-around items-center space-y-4 text-white text-6xl h-screen"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <h2>powered by gaming, art, humor, tech, and a love for humanity.
          we&apos;re just a crafty crew of independent artists</h2>
        </div>
      </div>
      <div className="second-image h-screen w-full bg-[url('/bg2.jpg')] bg-cover bg-center">
        <div
          className="flex flex-col text-center justify-around items-center space-y-4 text-white text-6xl h-screen"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <h2>powered by gaming, art, humor, tech, and a love for humanity.
          we&apos;re just a crafty crew of independent artists</h2>
        </div>
      </div>
    </>
  );
}
