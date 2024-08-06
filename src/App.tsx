import "./App.scss";
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    </>
  );
};

export default App;
