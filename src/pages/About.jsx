import AboutInfo from "../Components/Sections/AboutInfo";
import Banner from "../Components/Sections/Banner";
import ChooseUs from "../Components/Sections/ChooseUs";
import CTABanner from "../Components/Sections/CTABanner";
import CrossMarquee from "../Components/Sections/Marquee";
const About = () => {
  return (
    <div className="pt-20 md:pt-24">
      <Banner text="About Us" />
      <div className="section-bg-layout">
        <div className="main-container">
          <AboutInfo
            text="It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters"
            classname="px-[20px] py-3 hidden"
          />
          <CTABanner />
          <ChooseUs />
        </div>
        <CrossMarquee />
      </div>
    </div>
  );
};

export default About;
