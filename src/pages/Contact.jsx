import Banner from "../Components/Sections/Banner";
import ChooseUs from "../Components/Sections/ChooseUs";
import ContactForm from "../Components/Sections/ContactForm";
import CTABanner from "../Components/Sections/CTABanner";
import CrossMarquee from "../Components/Sections/Marquee";
const Contact = () => {
  return (
    <div className="pt-20 md:pt-24">
      <Banner text="Contact Us" />
      <div className="section-bg-layout">
        <div className="main-container">
          <ContactForm />
          <CTABanner />
          <ChooseUs />
        </div>
        <CrossMarquee />
      </div>
    </div>
  );
};

export default Contact;
