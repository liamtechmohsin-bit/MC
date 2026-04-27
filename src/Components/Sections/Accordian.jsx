import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import bg from '../../assets/bgimage.png';
const data = [
    { title: "Digital Marketing", content: "We help you grow your brand using modern AI strategies." },
    { title: "Graphic Designing", content: "Creative visuals that speak louder than words." },
    { title: "Web Development", content: "Fast, responsive, and secure websites for your business." },
    { title: "UI/UX Designing", content: "User-centric designs that provide amazing experiences." },
    { title: "SEO Services", content: "Efficient business process outsourcing for scalability." },
    { title: "BPO Services", content: "Efficient business process outsourcing for scalability." },
];

const VerticalAccordionc = () => {
    const [active, setActive] = useState(null);
    const [hovered, setHovered] = useState(null);

    return (
        <div className="py-10 md:py-20 flex flex-col items-center ">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#74118C] text-center mb-16">
                We Provide Exclusive Service <br /> For Your Business
            </h2>

            <div className="flex w-[100%] max-w-7xl h-[450px] gap-2">
                {data.map((item, index) => {
                    const isActive = active === index;
                    const isHovered = hovered === index;
                    const showDark = isActive || isHovered;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => setActive(index)}
                            className={`relative cursor-pointer transition-all duration-700 overflow-hidden rounded-md border-[2px] border border-[#74118C] shadow-sm
                ${isActive ? "flex-[4]" : "flex-[1]"} 
                ${showDark ? "active-bg" : "default-bg"}`}
                        >
                            {/* Abstract Pattern Overlay */}
                            <div className={`accordion-pattern -top-10 transition-opacity duration-500 ${showDark ? 'opacity-60' : 'opacity-100'}`}>
                                <img src={bg} alt="" />
                            </div>

                            {/* Title - Rotated for Closed items, Horizontal for Active */}
                            <div
                                className={`absolute transition-all duration-700 ease-in-out whitespace-nowrap
                ${isActive
                                        ? "top-12 left-10 text-white text-xl md:text-3xl font-bold rotate-0"
                                        : "bottom-40 left-1/2 -translate-x-1/2 -rotate-90 text-[#74118C] text-xl font-bold"
                                    } ${isHovered && !isActive ? 'text-white' : ''}`}
                            >
                                {item.title}
                            </div>

                            {/* Content - Only show when Active */}
                            <div className={`absolute top-28 left-10 transition-all duration-500 pr-10
                ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {item.content}
                                </p>
                            </div>

                            {/* Bottom Icon */}
                            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500
                ${showDark
                                    ? "bg-white/20 border-white text-white"
                                    : "bg-[#74118C] border-white text-white"}`}>
                                <FiArrowRight className={`text-2xl transition-transform duration-500 ${isActive ? 'rotate-[-45deg]' : ''}`} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default VerticalAccordionc