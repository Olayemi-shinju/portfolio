import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills/>
        <Contact />
      </main>
    </>
  );
}
