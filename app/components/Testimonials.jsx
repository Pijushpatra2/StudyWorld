"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Jessica Williams",
    role: "Web Developer",
    image: "/placeholder.svg?height=100&width=100",
    text: "EDU CLUB completely transformed my career. The web development course was comprehensive and practical. I landed a job within a month of completing it!",
    course: "Web Development Bootcamp",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    image: "/placeholder.svg?height=100&width=100",
    text: "The data science course exceeded my expectations. The instructors were knowledgeable and the community support was incredible. Highly recommended!",
    course: "Data Science Fundamentals",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    image: "/placeholder.svg?height=100&width=100",
    text: "As someone looking to enhance my marketing skills, EDU CLUB provided exactly what I needed. The course was up-to-date with current trends and practical examples.",
    course: "Digital Marketing Mastery",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=100&width=100",
    text: "The design principles I learned at EDU CLUB are invaluable. The instructors are industry professionals who provide real-world insights and feedback.",
    course: "UX/UI Design Principles",
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
            What Our <span className="text-[#EF5350]">Students</span> Say
          </h2>
          <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">
            Hear from our students who have transformed their lives through our courses.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F5F5F0] rounded-2xl p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="shrink-0">
                <img
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2E2E2E] text-lg mb-6 italic">"{testimonials[activeIndex].text}"</p>
                <div>
                  <h4 className="text-[#2E2E2E] font-bold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-[#2E2E2E]/70">{testimonials[activeIndex].role}</p>
                  <p className="text-[#43A047] font-medium text-sm mt-1">Course: {testimonials[activeIndex].course}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-[#EF5350]" : "bg-[#EF5350]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md text-[#2E2E2E] hover:text-[#EF5350] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md text-[#2E2E2E] hover:text-[#EF5350] transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
