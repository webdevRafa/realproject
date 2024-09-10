import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="hidden md:block city"></div>
      <div className="block md:hidden citymobile"></div>
    </>
  );
}

export default App;
