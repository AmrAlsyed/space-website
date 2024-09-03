import { useEffect } from "react";
import bgVideo from "../assets/earth-bg.mp4";
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Hero />
      </div>
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;
