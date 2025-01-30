import Image from "next/image";
import dex from "@/assets/dex.svg";
import right from "@/assets/right.svg";
import Container from "@/app/components/Container";

export default function MemecoinSection() {
  return (
    <>  
    <div id="memecoin" className="" />
    <div  className="third-image overflow-y-hidden h-screen w-full sticky top-0 bg-[url('/bg2.jpg')] bg-cover bg-center">
      <Container>
        <div className="container flex text-center p-4 justify-center items-center space-y-2 text-white h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap- md:gap-20">
            <div className="flex flex-col space-y-4 md:space-y-9">
              <h2 className="text-start text-2xl md:text-center md:text-4xl">Fair Launch</h2>
              <h2 className="text-start text-4xl md:text-5xl">NO INSIDERS.</h2>
              <h2 className="text-start text-4xl md:text-5xl">NO LOCKUPS.</h2>
              <h2 className="text-start text-4xl md:text-5xl">NO CABAL.</h2>
              <h2 className="text-start text-4xl md:text-5xl">NO KOL.</h2>
              <Image src={dex} alt="" />
            </div>
            <div>
              <Image src={right} alt="" className="md:w-[305px] w-[200px]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
