import "./App.scss";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
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
      </main>
    </>
  );
};

export default App;
