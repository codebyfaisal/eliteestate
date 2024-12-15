import {
  Header,
  Hero,
  About,
  Projects,
  Video,
} from "./components/components.js";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div id="about" className="py-8 md:p-0"></div>
      <main className="px-2 md:px-10 lg:px-20 relative space-y-20">
        <About />
        <Projects />
        <Video />
      </main>
    </>
  );
}

export default App;
