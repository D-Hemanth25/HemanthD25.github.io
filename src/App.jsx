import Navbar from "./components/Navbar";
import BioSection from "./components/BioSection";
import SkillsSection from "./components/SkillsSection";
import ProjectCard from "./components/ProjectCard";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black py-6 sm:py-12 ">
      <section className="main relative bg-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg">
        <div className="mx-auto w-full sm:max-w-[50%] max-w-[100%]">
          <BioSection />
          <SkillsSection />
          <ProjectCard />
          <ContactSection />
          <Navbar />
        </div>
      </section>
    </div>
  );
}

export default App;