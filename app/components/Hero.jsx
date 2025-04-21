"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroimg from "@/public/home/hero.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#EF5350]/10 to-[#43A047]/10 py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2E2E2E] leading-tight">
            Learn, Grow, and <span className="text-[#EF5350]">Succeed</span>
          </h1>
          <p className="mt-4 text-2xl text-[#2E2E2E]/80 font-medium">
            Make Life Valuable
          </p>
          <p className="mt-6 text-[#2E2E2E]/70 max-w-lg mx-auto md:mx-0 text-xl">
            Join thousands of students worldwide and transform your future with
            our expert-led courses, personalized learning paths, and supportive
            community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#EF5350] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e74c3c] transition-colors"
            >
              Explore Courses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2E2E2E] px-8 py-3 rounded-full font-medium border border-[#2E2E2E]/20 hover:border-[#2E2E2E]/40 transition-colors"
            >
              Free Trial
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Image
            src={heroimg}
            alt="Students learning online"
            className="w-full h-auto"
            placeholder="blur"
          />
<div className="absolute -top-6 -right-6 backdrop-blur-md bg-white/60 border border-white/30 p-3 rounded-xl shadow-2xl hidden md:block">
  <div className="flex items-center gap-4">
    <div className="bg-[#43A047] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
       <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 2a1 1 0 0 0-1 1v1H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V3a1 1 0 0 0-1-1H9zm0 2h6v1H9V4zm0 4h6v2H9V8zm0 4h6v2H9v-2zm0 4h4v2H9v-2z"/>
        </svg>
    </div>
    <div>
      <div className="text-[#2E2E2E] font-semibold text-base">
        Over 80k+ Tests
      </div>
    </div>
  </div>
</div>


          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-2xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-[#43A047] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                4.9
              </div>
              <div>
                <div className="text-[#2E2E2E] font-semibold">
                  Trusted by 20k+ students
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
