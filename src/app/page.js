import BottomSection from "@/components/ BottomSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 my-4 text-black">
      <Navbar />
      <Hero />

      {/* BottomSection */}
      <BottomSection />
    </div>
  );
}
