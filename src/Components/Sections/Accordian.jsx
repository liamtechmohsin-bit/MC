import { useState } from "react";
import bgimage from '../../assets/Servicesimg/bgimage.png'
import { IoArrowDownCircleSharp } from "react-icons/io5";

const data = [
    { title: "DIGITAL MARKETING", content: "Digital Marketing is the strategic practice of promoting brands, products, or services through digital channels to connect with a global audience in real-time. It integrates core pillars like SEO and PPC to capture search intent, Social Media to build community engagement, and Content Marketing to establish authority and trust. By leveraging data-driven insights and automation, businesses can move beyond traditional boundaries to deliver personalized experiences, track precise ROI, and nurture customer journeys from the first click to the final sale. Ultimately, it is an ever-evolving ecosystem focused on reaching the right person, at the right time, on the right device." },
    { title: "GRAPHIC DESIGNING", content: "Digital Marketing is the strategic practice of promoting brands, products, or services through digital channels to connect with a global audience in real-time. It integrates core pillars like SEO and PPC to capture search intent, Social Media to build community engagement, and Content Marketing to establish authority and trust. By leveraging data-driven insights and automation, businesses can move beyond traditional boundaries to deliver personalized experiences, track precise ROI, and nurture customer journeys from the first click to the final sale. Ultimately, it is an ever-evolving ecosystem focused on reaching the right person, at the right time, on the right device." },
    { title: "WEB DEVELOPMENT", content: "Digital Marketing is the strategic practice of promoting brands, products, or services through digital channels to connect with a global audience in real-time. It integrates core pillars like SEO and PPC to capture search intent, Social Media to build community engagement, and Content Marketing to establish authority and trust. By leveraging data-driven insights and automation, businesses can move beyond traditional boundaries to deliver personalized experiences, track precise ROI, and nurture customer journeys from the first click to the final sale. Ultimately, it is an ever-evolving ecosystem focused on reaching the right person, at the right time, on the right device." },
    { title: "UI/UX DESIGNING", content: "Digital Marketing is the strategic practice of promoting brands, products, or services through digital channels to connect with a global audience in real-time. It integrates core pillars like SEO and PPC to capture search intent, Social Media to build community engagement, and Content Marketing to establish authority and trust. By leveraging data-driven insights and automation, businesses can move beyond traditional boundaries to deliver personalized experiences, track precise ROI, and nurture customer journeys from the first click to the final sale. Ultimately, it is an ever-evolving ecosystem focused on reaching the right person, at the right time, on the right device." },
    { title: "BPO SERVICES", content: "Digital Marketing is the strategic practice of promoting brands, products, or services through digital channels to connect with a global audience in real-time. It integrates core pillars like SEO and PPC to capture search intent, Social Media to build community engagement, and Content Marketing to establish authority and trust. By leveraging data-driven insights and automation, businesses can move beyond traditional boundaries to deliver personalized experiences, track precise ROI, and nurture customer journeys from the first click to the final sale. Ultimately, it is an ever-evolving ecosystem focused on reaching the right person, at the right time, on the right device." },
    { title: "MOBILE APP DEVELOPMENT", content: "Digital Marketing is the strategic practice of promoting brands, products, or services through digital channels to connect with a global audience in real-time. It integrates core pillars like SEO and PPC to capture search intent, Social Media to build community engagement, and Content Marketing to establish authority and trust. By leveraging data-driven insights and automation, businesses can move beyond traditional boundaries to deliver personalized experiences, track precise ROI, and nurture customer journeys from the first click to the final sale. Ultimately, it is an ever-evolving ecosystem focused on reaching the right person, at the right time, on the right device." },
];
const Accordian = () => {
    const [active, setActive] = useState(null);
    const handleClick = (index) => {
        setActive(active === index ? null : index);
    };
    return (
        <div className="flex items-center justify-center pt-[80px]">
            <div className="flex w-[80%] h-[500px] gap-1">
                {data.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`relative cursor-pointer transition-all duration-500 overflow-hidden rounded-xl border border-[2px] border-[#74118C]
              ${active === index ? "flex-[5]" : "flex-[1]"}`}
                    >
                        {/* Background */}
                        <div className="absolute inset-0 bg-white"></div>
                        <img src={bgimage} alt="" className="absolute -top-[50px] left-[45px]" />
                        {/* Rotated Title (like your image) */}
                        <div
                            className={`absolute bottom-10 left-1/2 -translate-x-1/2 
              text-[#74118C] text-lg font-bold transition-all duration-300 w
              ${active === index ? "opacity-0" : "rotate-[-90deg]"}`}
                        >
                            <div className="relative flex justify-center gap-2 items-center">
                                <p>{item.title}</p>
                               
                            </div>
                        </div>
                        {/* Open Content */}
                        {active === index && (
                            <div className="relative z-10 p-6 text-white">
                                <h2 className="text-2xl font-bold mb-3 text-[#74118C]">{item.title}</h2>
                                <p className="text-gray-500">{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Accordian