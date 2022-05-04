import "./App.css";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import { Navbar } from "./component/Navbar/Navbar";
import Support from "./component/Support/Support";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
    </>
  );
}

export default App;
