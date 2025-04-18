"use client"
import { motion } from "framer-motion"

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#EF5350] to-[#E53935]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Start Your Learning Journey Today
            </h2>
            <p className="mt-4 text-white/80 max-w-lg">
              Join thousands of students already learning on EDU CLUB. Get unlimited access to all courses, projects,
              and exclusive community resources.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold">500+ Courses</h3>
                  <p className="text-white/70 text-sm">In various categories</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
                <div className="bg-white/20 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-bold">Lifetime Access</h3>
                  <p className="text-white/70 text-sm">Learn at your own pace</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">Sign Up For Free</h3>
            <p className="text-[#2E2E2E]/70 mb-6">Get started with a free account and explore our platform.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-[#2E2E2E] mb-1">
                  I'm interested in
                </label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                >
                  <option value="">Select your interest</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="design">UX/UI Design</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#43A047] text-white py-3 rounded-lg font-medium hover:bg-[#388E3C] transition-colors"
                type="submit"
              >
                Create Free Account
              </motion.button>
            </form>
            <p className="text-center text-[#2E2E2E]/60 text-sm mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
