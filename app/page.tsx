import { Contact } from "./components/sections/contact";
import { Experience } from "./components/sections/experience";
import { Footer } from "./components/sections/footer";
import { Header } from "./components/sections/header";
import { Hero } from "./components/sections/hero";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
