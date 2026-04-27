import { useParams } from "react-router";
import { servicesData } from "./ServiceDetails";
import Banner from "../Components/Sections/Banner";
import CTABanner from "../Components/Sections/CTABanner";
import ChooseUs from "../Components/Sections/ChooseUs";
import ServiceOverview from "../Components/Sections/ServiceOverview";
import CrossMarquee from "../Components/Sections/Marquee";

const SingleService = () => {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === id);
  return (
    <div className="pt-20 md:pt-24">
      <Banner text={service.title} />
      <div className="section-bg-layout">
        <div className="main-container">
          <ServiceOverview image={service.img} />
          <CTABanner />
          <ChooseUs />
        </div>
        <CrossMarquee />
      </div>
    </div>
  );
};

export default SingleService;
