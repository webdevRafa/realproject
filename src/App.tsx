import { About } from "./components/About";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <About />
      <div className="h-[1000px]"></div>
    </>
  );
}

export default App;
