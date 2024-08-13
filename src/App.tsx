import "./App.scss";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Model from "./components/Model/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Highlights />
        <Model/>
        <Features/>
        <HowItWorks/>
      </main>
    </>
  );
};

export default App;
