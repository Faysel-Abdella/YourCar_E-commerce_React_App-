import "./App.css";
import Hero from "./components/2_hero_section/Hero";
import AboutUs from "./components/3_aboutUs_section/AboutUs";
import Services from "./components/4_services/Services";
import CartLists from "./components/5_cars_section/carLists/CarLists";
import CarsImages from "./components/6_cars_images_section/CarsImages";
import Testimonials from "./components/7_testimonials_section/Testimonials";
import Sponsors from "./components/8_sponsors_section/Sponsors";

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <CartLists />
      <CarsImages />
      <Testimonials />
      <Sponsors />
    </>
  );
}

export default App;
