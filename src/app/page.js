import Hero from "@/components/Hero";
import Main from "@/components/Main/Main";
import Price from "@/components/Main/Price";
import Mapping from "@/components/Mapping";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Services from "@/components/Services";
import dynamic from "next/dynamic";
const Geolocation = dynamic(() => import("@/components/Geolocation"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <br />
      <br />
      <Services />
      <br />
      <br />
      <Main />
      <br />
      <br />
      <Geolocation />
      <br />
      <br />
      <br />
      <Price />
      <br />
    </div>
  );
}
