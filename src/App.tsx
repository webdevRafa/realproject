import { About } from "./components/About";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { Sections } from "./components/Sections";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Sections />
      <div className="h-[1000px]"></div>
    </>
  );
}

export default App;
