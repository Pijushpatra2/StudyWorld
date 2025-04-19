"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Aditi Sharma",
      role: "Parent of Class 10 Student",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "This platform has been a blessing for my daughter. The interactive classes and doubt sessions helped her gain confidence in Math and Science.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Engineering Aspirant",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Thanks to the personalized learning plans and quality teaching, I cracked JEE Mains with a great score. Highly recommended for serious learners!",
      rating: 5,
    },
    {
      name: "Meena Iyer",
      role: "Class 12 Student",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Live classes are top-notch and the teachers really care. I loved the quick responses during doubt sessions and the regular mock tests.",
      rating: 5,
    },
    {
      name: "Sandeep Joshi",
      role: "Father of Class 8 Student",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "Affordable and effective. My son now enjoys studying and looks forward to his online sessions. Great job by the team!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-[#F5F5F0] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block"
          >
            <span className="px-4 py-1 rounded-full bg-[#EF5350]/10 text-[#EF5350] text-sm font-medium border border-[#EF5350]/20">
              STUDENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#2E2E2E]"
          >
            Why Students & Parents Love Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#2E2E2E]/70"
          >
            Hear what our community has to say about our teaching approach, support system, and student success stories.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            className="py-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-1 rounded-xl h-full shadow-md">
                  <div className="bg-[#FAFAFA] rounded-xl p-6 h-full border border-[#EF5350]/10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#43A047]">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-[#2E2E2E] font-bold">{testimonial.name}</h4>
                          <p className="text-[#2E2E2E]/60 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-[#EF5350]/30" />
                    </div>

                    <p className="text-[#2E2E2E]/80 mb-6 italic">"{testimonial.quote}"</p>

                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-[#EF5350] fill-[#EF5350]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <div className="testimonial-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-[#EF5350]/30 text-[#EF5350] hover:bg-[#EF5350]/10 transition-colors cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="testimonial-next absolute top-1/2 right-0 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-[#EF5350]/30 text-[#EF5350] hover:bg-[#EF5350]/10 transition-colors cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
