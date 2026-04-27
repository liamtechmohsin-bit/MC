import { servicesData } from "../../Pages/ServiceDetails";
import ServiceCard from "../Common/ServiceCard";
const ServiceGrid = () => {
  return (
    <section className="relative w-full py-5 md:py-10">
      {/* Section Title (Hamein pehle se reusable component banaya hua hai) */}
      <div className="section-header max-w-4xl mx-auto px-4 mb-5 text-center">
        {/* 'WHY CHOOSE US' tag is optional here, design mein nahi dikh raha */}
        <h2 className="section-title text-[#74118C]">
          We Provide Exclusive Service For Your Business
        </h2>
      </div>
      {/* The Responsive Grid Container */}
      <div className="services-grid-container">
        {servicesData.map((service,index) => (
          <ServiceCard
            key={index}
            id={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
