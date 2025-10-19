import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Howtohelp from "@/sections/Howtohelp";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About id="about" />
        <Services id="services" />
        <Howtohelp id="howtohelp" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
        <Footer />
      </main>
    </>
  );
}
