import "./App.css";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import { Navbar } from "./component/Navbar/Navbar";
import Support from "./component/Support/Support";
import AllinOne from "./component/AllinOne/AllinOne";
import Pricing from "./component/Pricing/Pricing";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllinOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
