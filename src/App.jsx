import {
  Header,
  Hero,
  About,
  Projects,
  Testimonials,
  Contact,
  Footer,
  Video,
} from "./components/components.js";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Hero />

      <div id="about" className="py-8 md:p-0"></div>
      <main className="px-2 md:px-10 lg:px-20 relative space-y-20">
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
