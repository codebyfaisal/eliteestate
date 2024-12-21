import { useEffect } from "react";
import { Header, Hero, About, Projects, Testimonials, Contact, Footer, Video, } from "./components/components.js";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    window.scrollTo({ left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Toaster />
      <Header />
      <Hero />

      <div className="sm:py-4 md:py-0"></div>
      <main className="px-2 md:px-10 lg:px-20 relative space-y-20 mt-8 sm:mt-0">
        <About />
        <Projects />
        <Video />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
