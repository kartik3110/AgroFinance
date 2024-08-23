import Navbar from "../components/Home/Navbar";
import CallToAction from "../components/Home/CallToAction";
import Section2 from "../components/Home/Section2";
import Services from "../components/Home/Services";
import Benefits from "../components/Home/Benefits";
import Testimonials from "../components/Home/Testimonials";
import Blog from "../components/Home/Blog";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[124px] box-border tracking-[normal]">
      <img
        className="w-full h-[817px] absolute !m-[0] top-[142px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <Navbar />
      <CallToAction />
      <Section2 />
      <Services />
      <Benefits />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
