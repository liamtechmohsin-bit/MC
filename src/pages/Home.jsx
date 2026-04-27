import AboutInfo from "../Components/Sections/AboutInfo";
import VerticalAccordionc from "../Components/Sections/Accordian";
import ServicesAccordion from "../Components/Sections/Accordian";
import ChooseUs from "../Components/Sections/ChooseUs";
import HeroBanner from "../Components/Sections/HeroBanner";
import CrossMarquee from "../Components/Sections/Marquee";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="section-bg-layout">
        <div className="main-container">
          <VerticalAccordionc />
          <AboutInfo classname="px-[20px] py-2 rounded-md cursor-pointer w-[140px] mx-auto md:mx-0 bg-[#74118C] text-white hover:border-[1px] border-[#74118C] hover:bg-white hover:text-[#74118C] font-semibold transition-all duration-300 ease-in" />
          <ChooseUs />
        </div>
        <CrossMarquee />
      </div>
    </div>
  );
};

export default Home;
