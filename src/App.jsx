import react from "react";
import "./components/css/main.css";
import "./components/css/stylesheet.css";
import Header from "./components/js/Header";
import Hero from "./components/js/Hero";
import Companies from "./components/js/Companies";
import Residencies from "./components/js/Residencies";
import Value from "./components/js/Value";
import Contact from "./components/js/Contact";
import GetStarted from "./components/js/GetStarted";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
