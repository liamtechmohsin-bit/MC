const AboutInfo = ({ text, classname }) => {
  return (
    <section className="info-section py-5 md:py-10">
      <div className="info-container">
        {/* Left Side: Text Content */}
        <div className="info-text-wrapper">
          <h2 className="info-title-main">
            <span className="info-title-purple">MetaCo Digitals</span> offers
            dependable tech assistance.
          </h2>

          <p className="info-description">{text}</p>
          <button className={classname}>About us</button>
        </div>

        {/* Right Side: Image */}
        <div className="info-image-wrapper">
          <img
            src="/src/assets/about.png"
            alt="MetaCo Team working"
            className="info-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
