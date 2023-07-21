import Hero from "@/components/Hero";
import Main from "@/components/Main/Main";
import Price from "@/components/Price";
import Mapping from "@/components/Mapping";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Services from "@/components/Services";
import dynamic from "next/dynamic";
import Contact from "@/components/Contact";
const Geolocation = dynamic(() => import("@/components/Geolocation"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
        <Section />
      </div>
      <br />
      <br />
      <div id="services">
        <Services />
      </div>
      <br />
      <br />
      <Main />
      <br />
      <br />
      <div id="map">
        <Geolocation />
      </div>
      <br />
      <br />
      <br />
      <div id="price">
        <Price />
      </div>
      <br />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
