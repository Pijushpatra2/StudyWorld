"use client"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />

      <section className="bg-[#F5F5F0] py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
              Contact <span className="text-[#EF5350]">Us</span>
            </h1>
            <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">Get In Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#2E2E2E] mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#2E2E2E] mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
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
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2E2E2E] mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2E2E2E] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#EF5350] text-white py-3 rounded-lg font-medium hover:bg-[#E53935] transition-colors"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">Contact Information</h2>
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#EF5350]/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#EF5350]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2E2E2E]">Our Location</h3>
                      <p className="text-[#2E2E2E]/70 mt-1">123 Education St, Learning City, 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#EF5350]/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#EF5350]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2E2E2E]">Email Us</h3>
                      <p className="text-[#2E2E2E]/70 mt-1">info@educlub.com</p>
                      <p className="text-[#2E2E2E]/70">support@educlub.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#EF5350]/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#EF5350]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2E2E2E]">Call Us</h3>
                      <p className="text-[#2E2E2E]/70 mt-1">+1 (555) 123-4567</p>
                      <p className="text-[#2E2E2E]/70">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#EF5350]/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#EF5350]"
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
                    <div>
                      <h3 className="font-medium text-[#2E2E2E]">Working Hours</h3>
                      <p className="text-[#2E2E2E]/70 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-[#2E2E2E]/70">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#2E2E2E] mb-6">Find Us On Map</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-[300px]">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2E2E2E]">
              Frequently Asked <span className="text-[#EF5350]">Questions</span>
            </h2>
            <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">Find answers to common questions about EDU CLUB.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I enroll in a course?",
                answer:
                  "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the \"Enroll Now\" button. You'll be prompted to create an account or log in if you already have one, and then you can complete the enrollment process.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For some courses, we also offer installment payment options.",
              },
              {
                question: "Can I get a refund if I'm not satisfied with a course?",
                answer:
                  "Yes, we offer a 30-day money-back guarantee for most of our courses. If you're not satisfied with your purchase, you can request a refund within 30 days of enrollment.",
              },
              {
                question: "How long do I have access to a course after enrollment?",
                answer:
                  "Once you enroll in a course, you have lifetime access to the course materials. You can learn at your own pace and revisit the content whenever you need to refresh your knowledge.",
              },
              {
                question: "Do you offer certificates of completion?",
                answer:
                  "Yes, we provide certificates of completion for all our courses. Once you've completed all the required lectures and assignments, you can download your certificate directly from your dashboard.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2E2E2E]">{faq.question}</h3>
                  <p className="mt-2 text-[#2E2E2E]/70">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-[#2E2E2E]/70">Still have questions? Contact our support team for assistance.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-[#EF5350] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E53935] transition-colors"
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
