import "./App.css";
import Hero from "./components/2_hero/Hero";
import AboutUs from "./components/3_aboutUs/AboutUs";
import Services from "./components/4_services/Services";
import CartLists from "./components/5_cars_section/carLists/CarLists";

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <CartLists />
    </>
  );
}

export default App;
