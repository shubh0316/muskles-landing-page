import Image from "next/image";
import line1 from "@/assets/line.png";
import icon from "@/assets/icon.svg";
import Container from "@/app/components/Container";

export default function AboutSection() {
  return (
    <>  
        <div id="about" className="" />

    <div  className="second-image overflow-y-hidden h-screen w-full sticky top-0 bg-[url('/bg1.jpg')] bg-cover bg-center">
      <Container>
        <div className="container flex flex-col text-center p-4 justify-center items-center space-y-2 text-white h-screen">
          <h2 className="text-[#F7FF00] text-2xl md:text-6xl">
            powered by gaming, art, humor, tech, and a love for humanity.
          </h2>
          <Image src={line1} alt="" className="w-1/2" />
          <h2 className="text-white text-lg md:text-4xl">
            we&apos;re just a crafty crew of independent artists
            <br />
            and devs who have worked for these fine studios...
          </h2>
          <Image src={icon} alt=" " />
          <p className="absolute font-sans bottom-8 w-1/2 text-xs md:text-sm text-white text-center">
            *All trademarks, logos and brand names are the property of their
            respective owners and are used for identification purposes only.
            Use of these names, trademarks and brands does not imply
            endorsement and have no direct affiliation.
          </p>
        </div>
      </Container>
    </div>
    </>
  );
}
