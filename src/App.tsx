import "./App.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Services from "./components/Services";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="bg-[#f6f6f6]">
      <Header />
      <Hero />
      <Services />
      <TechStack />
      <Partners />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
