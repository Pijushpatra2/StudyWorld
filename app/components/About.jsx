"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Palette, Ruler, Lightbulb, Sparkles, Award, Clock } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
      },
    }),
  }

  const stats = [
    { value: "12+", label: "School Grades Covered", icon: <Clock className="w-6 h-6 text-[#43A047]" /> },
    { value: "500+", label: "Courses Available", icon: <Award className="w-6 h-6 text-[#43A047]" /> },
    { value: "300K+", label: "Students Enrolled", icon: <Sparkles className="w-6 h-6 text-[#43A047]" /> },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-[#F5F5F0] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/home/about.avif?height=1000&width=800"
                alt="Student Learning Illustration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeIn}
                    className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg transition duration-300 hover:scale-105"
                  >
                    {stat.icon}
                    <span className="text-2xl font-bold text-[#43A047] mt-2">{stat.value}</span>
                    <span className="text-xs text-[#2E2E2E] text-center">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-4 inline-block"
            >
              <span className="px-4 py-1 rounded-full bg-[#EF5350]/10 text-[#EF5350] text-sm font-medium border border-[#EF5350]/30">
                ABOUT US
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6 text-[#2E2E2E]"
            >
              Shaping Bright Futures <span className="text-[#EF5350]">Through Learning</span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-[#2E2E2E]/80 mb-8"
            >
              At LearnSphere, we are dedicated to delivering world-class education for students from Class 1 to 12. Our
              platform offers a broad spectrum of engaging, curriculum-aligned courses designed to build strong academic
              foundations and develop critical life skills. With interactive lessons and passionate educators, we empower
              learners to grow, explore, and excel at their own pace.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Palette className="w-6 h-6 text-[#43A047]" />,
                  title: "Creative Learning",
                  description: "Interactive lessons that spark imagination and curiosity.",
                },
                {
                  icon: <Ruler className="w-6 h-6 text-[#43A047]" />,
                  title: "Structured Curriculum",
                  description: "Courses designed to match CBSE, ICSE, and state boards.",
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-[#43A047]" />,
                  title: "Concept Clarity",
                  description: "Deep understanding through visual aids and real-life examples.",
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-[#43A047]" />,
                  title: "All-Round Development",
                  description: "Focus on academics, life skills, and personality building.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index + 3}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeIn}
                  className="flex flex-col gap-2"
                >
                  <div className="p-3 bg-[#43A047]/10 rounded-lg w-fit">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-[#2E2E2E]">{item.title}</h3>
                  <p className="text-sm text-[#2E2E2E]/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
