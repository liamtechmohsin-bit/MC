const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-fill"
            >
                <source src="/src/assets/bgvideo.mp4" type="video/mp4" />
            </video>
            {/* Overlay (dark effect for readability) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#74118C] px-3 sm:px-20 md:px-52">
                    <span className='text-white'>Modernise your business</span> <br />with own AI Solutions
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white">
                    We create amazing digital experiences
                </p>
            </div>
        </div>
  );
};

export default HeroBanner;
