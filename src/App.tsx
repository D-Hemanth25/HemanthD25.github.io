import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black py-6 sm:py-12 ">
      <section className="main relative bg-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg">
        <div className="mx-auto w-full sm:max-w-[50%] max-w-[100%]">
          <Bio />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Navbar />
        </div>
      </section>
    </div>
  );
}

export default App;