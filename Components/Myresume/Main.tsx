import Footer from "./Footer";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Hero from "./Sections/Hero";
import Jobs from "./Sections/Jobs";
import Projects from "./Sections/Projects";

function Main() {
  return (
    <main className=" py-0 px-10 sm:px-20 lg:px-80 lg:px-60 w-full min-h-screen max-w-screen-2xl mx-auto my-0">
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
