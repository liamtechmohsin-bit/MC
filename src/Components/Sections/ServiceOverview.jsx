import {
  FiTarget,
  FiMonitor,
  FiDollarSign,
  FiGlobe,
  FiBriefcase,
} from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const ServiceOverview = ({ image }) => {
  const services = [
    {
        title: "Software Quality & Delivery Services",
        icon: <FiTarget className="text-3xl md:text-5xl" />,
    },
    {
        title: "Software Development Services",
        icon: <FiMonitor className="text-3xl md:text-5xl" />,
    },
    {
        title: "Finance Service Line",
        icon: <FiDollarSign className="text-3xl md:text-5xl" />,
    },
    {
        title: "Sales & Marketing Team Augmentation",
        icon: <HiOutlineSpeakerphone className="text-4xl md:text-5xl" />,
    },
    {
      icon: <FiGlobe className="text-3xl md:text-5xl" />,
      title: "Client Care & Maintenance Support Staff Augmentation",
    },
    {
      icon: <FiBriefcase className="text-3xl md:text-5xl" />,
      title: "Professional Services & IT",
    },
  ];

  return (
    <section className="py-5 md:py-14">
      <div className="overview-container">
        {/* Left Side: Text & Image */}
        <div className="overview-left">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-500">
              Service <span className="text-[#74118C]">Overview</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters,
            </p>
          </div>
          <div className="overview-image flex justify-center items-center">
            <img src={image} alt="Service Overview" />
          </div>
        </div>

        {/* Right Side: Icon List */}
        <div className="overview-right">
          <div className="mb-1">
            <h3 className="text-gray-500 font-medium uppercase tracking-widest text-xl md:text-2xl">
              We Deliver
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#74118C]">
              Excellence
            </h2>
          </div>
          <div className="flex flex-wrap gap-9">
            {services.map((item, index) => (
              <div key={index} className="service-item">
                <span className="service-icon-box">{item.icon}</span>
                <div className="service-text pt-1">
                  <span className="service-name pr-36">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
