import { useNavigate } from "react-router";

const ServiceCard = ({ icon, title, description, id }) => {
  const navigate = useNavigate();
  return (
    <div className="service-card">
      {/* Background Pattern Overlay */}
      <img
        src="/src/assets/bgimage.png"
        className="service-card-pattern-right"
        alt=""
      />
      <img
        src="/src/assets/bgimage.png"
        className="service-card-pattern-left"
        alt=""
      />
      {/* Actual Content (Ensures it sits above the pattern) */}
      <div className="service-card-content flex flex-col items-start gap-4">
        {/* Icon (Yahan aap icon/image prop pass karein) */}
        <div className="service-card-icon">
          <img src={icon} className="w-full h-full" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <h3 className="service-card-title pr-[60px]">{title}</h3>
          <p className="service-card-desc">{description}</p>
        </div>

        {/* Learn more link */}
        <button
          href="#"
          className="service-card-link mt-auto"
          onClick={() => navigate(`/services/${id}`)}
        >
          Learn more...
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
