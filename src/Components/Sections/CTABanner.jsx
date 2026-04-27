const CTABanner = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="cta-banner">
        <img
          src="/src/assets/CTAbg.png"
          className="cta-pattern-left spin-slow"
          alt=""
        />
        <img
          src="/src/assets/CTAbg.png"
          className="cta-pattern-right spin-slow"
          alt=""
        />
  
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            What Makes Us Contour
          </h2>
          <p className="text-purple-200 text-sm md:text-base mb-8">
            We want to provide you with the remarkable solutions you deserve
          </p>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-button">Life at Contour</button>
            <button className="cta-button">We're Hiring</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
