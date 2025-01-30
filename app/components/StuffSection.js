import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Container";
import coin from "@/assets/@musklescoin.svg";
export default function StuffSection() {
  return (
    <> 
    <div id="stuff" className="" />
    <div  className="fourth-image overflow-y-hidden h-screen w-full sticky top-0 bg-[url('/bg3.jpg')] bg-cover bg-center">
      <Container>
        <div className="container flex flex-col text-center p-4 justify-center items-center space-y-2 text-white h-screen">
          <h2 className="text-3xl md:text-6xl  md:w-3/4 text-white">
            WE&apos;RE HARD AT WORK MAKING TOP SECRET STUFF. FOLLOW US ON X FOR CLEARANCE.
          </h2>
          <Link href="https://x.com/musklescoin" target="_blank"> 
            <Image src={coin} alt="" className="md:w-[296px] w-32" />
          </Link>
        </div>
      </Container>
    </div>
    </>
  );
}
