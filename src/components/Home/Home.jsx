import React from "react";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import ServicesDisplay from "../ServicesDisplay/ServicesDisplay";
import OurKeyMain from "../OurKeys/OurKeyMain";

function Home() {
  return (
    <div>
      <Hero />
      <OurKeyMain />
      <ServicesDisplay />
      <Projects />
    </div>
  );
}

export default Home;
