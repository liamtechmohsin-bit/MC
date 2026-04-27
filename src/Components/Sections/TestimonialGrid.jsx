import MainTestimonial from "./MainTestimonial"
import Testimonials from "./MainTestimonial"

const TestimonialGrid = () => {
  return (
    <>
      <div className="section-header py-0">
        <h4 className="section-tagline text-white">TESTIMONIAL</h4>
        <h1 className="section-title text-white pb-3">
          Gain a competitive edge with our exclusive solutions.
        </h1>
        <p className="section-desc text-white/80 pb-3">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout. The point
          of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters,{" "}
        </p>
      </div>
      <MainTestimonial />
    </>
  )
}
export default TestimonialGrid
