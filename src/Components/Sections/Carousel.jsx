// import React from 'react'
// import { IoStar } from "react-icons/io5";
// import img from "../../assets/testimonial.avif";
// const Carousel = () => {
//     const stats = [
//         {
//             id: 1,
//             count: "10+",
//             content: "Tesars Experience"
//         },
//         {
//             id: 2,
//             count: "99+",
//             content: "Accuracy Rate"
//         },
//         {
//             id: 3,
//             count: "500+",
//             content: "Possitive Reviews"
//         },
//         {
//             id: 4,
//             count: "600+",
//             content: "Trusted Partners"
//         }
//     ]
//     return (
//         <>
//             <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-[70px] px-[60px]'>
//                 <div className='col-span-1 row-span-2 w-[370px] h-[449px] relative flex flex-col justify-between  bg-white/15 border-[1px] rounded-sm border-white py-[30px] px-[10px]'>
//                     <div className='absolute left-[140px] -top-[45px] w-[100px] h-[100px] border-[1px] border-white rounded-full'>
//                         <img src={img} className='w-full h-full rounded-full' alt="" />
//                     </div>
//                     <p className='pt-[30px] text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
//                     <div className=''>
//                         <h1 className='text-white font-semibold uppercase text-[20px]'><span className=' border-b-2 border-[#CA9352]'>Mohsin</span></h1>
//                         <p className='text-white uppercase'>Full Stack Developer</p>
//                         <div className='flex gap-2 pt-[2px]'>
//                             <IoStar className='text-[#CA9352]' />
//                             <IoStar className='text-[#CA9352]' />
//                             <IoStar className='text-[#CA9352]' />
//                             <IoStar className='text-[#CA9352]' />
//                             <IoStar className='text-[#CA9352]' />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-span-2 grid grid-rows-2 gap-2">
//                     <div className='grid grid-cols-2 gap-4'>
//                         <div className='w-[370px] h-[280px] relative flex flex-col justify-between  bg-white/15 border-[1px] rounded-sm border-white py-[30px] px-[10px]'>
//                             <div className='absolute left-[140px] -top-[45px] w-[100px] h-[100px] border-[1px] border-white rounded-full'>
//                                 <img src={img} className='w-full h-full rounded-full' alt="" />
//                             </div>
//                             <p className='pt-[30px] text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//                             <div className=''>
//                                 <h1 className='text-white font-semibold uppercase text-[20px]'><span className=' border-b-2 border-[#CA9352]'>Mohsin</span></h1>
//                                 <p className='text-white uppercase'>Full Stack Developer</p>
//                                 <div className='flex gap-2 pt-[2px]'>
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='w-[370px] h-[280px] relative flex flex-col justify-between  bg-white/15 border-[1px] rounded-sm border-white py-[30px] px-[10px]'>
//                             <div className='absolute left-[140px] -top-[45px] w-[100px] h-[100px] border-[1px] border-white rounded-full'>
//                                 <img src={img} className='w-full h-full rounded-full' alt="" />
//                             </div>
//                             <p className='pt-[30px] text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//                             <div className=''>
//                                 <h1 className='text-white font-semibold uppercase text-[20px]'><span className=' border-b-2 border-[#CA9352]'>Mohsin</span></h1>
//                                 <p className='text-white uppercase'>Full Stack Developer</p>
//                                 <div className='flex gap-2 pt-[2px]'>
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                     <IoStar className='text-[#CA9352]' />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-white h-[160px] w-[750px] rounded-sm flex justify-around items-center">
//                         {stats.map((list, index) => (
//                             <React.Fragment key={list.id}>
//                                 <div className='' >
//                                     <h1 className='text-[#9D2DF0] text-center font-semibold text-[26px]'>{list.count}</h1>
//                                     <p className='font-semibold'>{list.content}</p>
//                                 </div>
//                                 <div className="hidden md:block h-20 border-l-2 border-dotted border-purple-300"></div>
//                             </React.Fragment>
//                         ))}

//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Carousel

import React, { useState, useEffect, useRef } from 'react';
import { IoStar } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import img from "../../assets/testimonial.avif";

// ─── Data ────────────────────────────────────────────────────────────
const testimonials = [
  {
    id: 1, name: "Mohsin", role: "Full Stack Developer", stars: 5, img: img,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    id: 2, name: "Sarah", role: "UI/UX Designer", stars: 5, img: img,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    id: 3, name: "Ahmed", role: "Backend Developer", stars: 5, img: img,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
  {
    id: 4, name: "Elena", role: "Product Manager", stars: 5, img: img,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
  },
];

const statsData = [
  { id: 1, target: 10,  suffix: "+", label: "Years Experience"  },
  { id: 2, target: 99,  suffix: "+", label: "Accuracy Rate"     },
  { id: 3, target: 500, suffix: "+", label: "Positive Reviews"  },
  { id: 4, target: 600, suffix: "+", label: "Trusted Partners"  },
];

// ─── Animated Counter Hook ───────────────────────────────────────────
function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

// ─── Stat Cell ───────────────────────────────────────────────────────
function StatCell({ target, suffix, label, active }) {
  const count = useCountUp(target, 1800, active);
  return (
    <div className="flex flex-col items-center justify-center py-5 px-2 text-center border-r-2 border-dotted border-purple-300 last:border-r-0">
      <h1 className="text-[#9D2DF0] font-bold text-2xl tabular-nums">
        {count}{suffix}
      </h1>
      <p className="text-gray-500 font-semibold text-xs mt-1">{label}</p>
    </div>
  );
}

// ─── Stars ───────────────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1 pt-1">
      {Array.from({ length: count }).map((_, i) => (
        <IoStar key={i} className="text-[#CA9352]" />
      ))}
    </div>
  );
}

// ─── Testimonial Card ────────────────────────────────────────────────
function TestiCard({ person, big = false }) {
  return (
    <div
      className={`relative bg-white/15 border border-white/30 rounded-sm flex flex-col justify-between transition-all duration-300
        ${big ? "py-[30px] px-[14px] min-h-[400px]" : "py-[26px] px-[14px] min-h-[240px]"}`}
    >
      {/* Floating Avatar */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[42px] w-[84px] h-[84px] border border-white/40 rounded-full overflow-hidden bg-[#5c2d91]">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Review Text */}
      <p className={`text-white/85 leading-relaxed pt-8 flex-1 ${big ? "text-sm" : "text-xs"}`}>
        {person.text}
      </p>

      {/* Name / Role / Stars */}
      <div className="mt-3">
        <h1 className="text-white font-bold text-lg uppercase tracking-wide">
          <span className="border-b-2 border-[#CA9352]">{person.name}</span>
        </h1>
        <p className="text-white/50 text-[10px] uppercase tracking-widest mt-[2px] mb-2">
          {person.role}
        </p>
        <Stars count={person.stars} />
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────
const Carousel = () => {
  const total = testimonials.length;
  const [idx, setIdx] = useState(0);
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  // Scroll observer — triggers counter animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const next = () => setIdx((prev) => (prev + 1) % total);
  const prev = () => setIdx((prev) => (prev - 1 + total) % total);

  const mainPerson = testimonials[idx];
  const smallCard1 = testimonials[(idx + 1) % total];
  const smallCard2 = testimonials[(idx + 2) % total];

  return (
    <section
      className="py-[70px] px-[40px] max-sm:px-4"
      
    >
      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1000px] mx-auto">

        {/* BIG CARD — left column, spans 2 rows */}
        <div className="col-span-1 md:row-span-2 mt-12">
          <TestiCard person={mainPerson} big={true} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-3">

          {/* Two small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            <div
              className="cursor-pointer hover:scale-[1.01] transition-transform duration-200"
              onClick={() => setIdx((idx + 1) % total)}
            >
              <TestiCard person={smallCard1} />
            </div>
            <div
              className="cursor-pointer hover:scale-[1.01] transition-transform duration-200"
              onClick={() => setIdx((idx + 2) % total)}
            >
              <TestiCard person={smallCard2} />
            </div>
          </div>

          {/* Stats Bar */}
          <div
            ref={statsRef}
            className="bg-white rounded-sm grid grid-cols-2 md:grid-cols-4 overflow-hidden min-h-[130px]"
          >
            {statsData.map((s) => (
              <StatCell
                key={s.id}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
                active={statsStarted}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Nav Controls — outside carousel, centered below ── */}
      <div className="flex items-center justify-center gap-4 mt-8">

        {/* Prev Button */}
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border-2 border-white/40 bg-white/10 text-white
            flex items-center justify-center
            hover:bg-[#CA9352] hover:border-[#CA9352] transition-all duration-200"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300
                ${i === idx ? "bg-[#CA9352] w-6" : "bg-white/30 w-2"}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="w-11 h-11 rounded-full border-2 border-white/40 bg-white/10 text-white
            flex items-center justify-center
            hover:bg-[#CA9352] hover:border-[#CA9352] transition-all duration-200"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;