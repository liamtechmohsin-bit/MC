const ribbonItems = Array(20).fill("We Offer");

function Ribbon({ direction = "left", rotate }) {
  return (
    <div
      className="absolute w-[160%] left-[-30%] h-12 bg-[#74118C] flex items-center overflow-hidden shadow-lg"
      style={{
        top: "20%",
        transform: `translateY(-50%) rotate(${rotate}deg)`,
        zIndex: direction === "right" ? 2 : 1,
      }}
    >
      <div
        className="flex items-center whitespace-nowrap will-change-transform"
        style={{
          animation: `scroll${direction === "left" ? "Left" : "Right"} 10s linear infinite`,
        }}
      >
        {ribbonItems.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-4 text-white font-bold text-base tracking-wide shrink-0"
          >
            {text}
            <span className="w-1.5 h-1.5 rounded-full bg-white/50 ml-2 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

const CrossMarquee = () => {
  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div className="relative w-full h-64  flex items-center justify-center">
        {/* Top-left → Bottom-right */}
        <Ribbon direction="left" rotate={-10}/>
        {/* Top-right → Bottom-left */}
        <Ribbon direction="right" rotate={10} />
      </div>
    </>
  );
};
export default CrossMarquee;
