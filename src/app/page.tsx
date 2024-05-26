// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import NewProduct from "./new-product";
import Testimonials from "./about-us";
import Contact from "./contacts";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <NewProduct />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
