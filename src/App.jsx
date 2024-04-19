import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import React from 'react'
import Testimonial from "./components/Testimonial/Testimonial"
import Footer from "./components/Footer/Footer"
import AOS from 'aos';
import "aos/dist/aos.css";


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  )
}

export default App
