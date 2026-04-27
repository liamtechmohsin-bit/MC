import Banner from "../Components/Sections/Banner";
import CareerForm from "../Components/Sections/CareerForm";
import ChooseUs from "../Components/Sections/ChooseUs";
import CTABanner from "../Components/Sections/CTABanner";
import CrossMarquee from "../Components/Sections/Marquee";
const Career = () => {
  return (
    <div className="pt-20 md:pt-24">
      <Banner text="Career" />
      <div className="section-bg-layout">
        <div className="main-container">
          <CareerForm />
          <CTABanner />
          <ChooseUs />
        </div>
        <CrossMarquee />
      </div>
    </div>
  );
};

export default Career;
