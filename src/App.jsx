import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Brands />
      <Contacts />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
