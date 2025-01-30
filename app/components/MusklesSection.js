import Image from "next/image";

export default function MusklesSection() {
  return (
    <> 
    <div id="muskles" className="absolute -top-20 h-20" />
    <div  className="h-screen w-full bg-[url('/bg.jpg')] sticky top-0 bg-cover bg-center">
      <div  className="h-[100dvh] grid grid-rows-[auto_1fr_auto] text-7xl md:text-9xl text-white p-4 overflow-hidden bg-cover">
        <div className="flex justify-start mt-20">MEET</div>
        <div></div>
        <div className="flex justify-end">MUSKLES</div>
      </div>
    </div>
    </>
  );
}
