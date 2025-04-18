"use client"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "John has over 15 years of experience in education and technology. He founded EDU CLUB with a mission to make quality education accessible to everyone around the world.",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Learning Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah is an education expert with a PhD in Educational Psychology. She oversees all course development and ensures the highest quality of learning materials.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael brings 12 years of experience in software development. He leads our technical team to create an intuitive and seamless learning platform.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Student Success",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Emily is passionate about helping students achieve their goals. She leads our student support team and develops programs to enhance the learning experience.",
  },
]

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from course content to platform experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description: "We believe education should be accessible to everyone, regardless of location or background.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We continuously innovate to provide the best learning experience using the latest technologies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Community",
    description: "We foster a supportive community where students can connect, collaborate, and grow together.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
]

const AboutPage = () => {
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
              About <span className="text-[#EF5350]">EDU CLUB</span>
            </h1>
            <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">
              Learn more about our mission, values, and the team behind EDU CLUB.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#2E2E2E]/80">
                <p>
                  Founded in 2018, EDU CLUB began with a simple mission: to make high-quality education accessible to
                  everyone around the world. What started as a small collection of online courses has grown into a
                  global learning platform with thousands of courses and millions of students.
                </p>
                <p>
                  Our founder, John Smith, recognized the barriers many people face when trying to access quality
                  education. Whether it's geographical limitations, financial constraints, or time restrictions,
                  traditional education isn't always accessible to everyone.
                </p>
                <p>
                  With this in mind, EDU CLUB was created to break down these barriers and provide flexible, affordable,
                  and high-quality learning opportunities for anyone with an internet connection.
                </p>
                <p>
                  Today, we continue to expand our course offerings, improve our platform, and innovate in the field of
                  online education. Our goal remains the same: to empower individuals to transform their lives through
                  learning.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="EDU CLUB story"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-[#43A047] h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                    5+
                  </div>
                  <div>
                    <div className="text-[#2E2E2E] font-semibold">Years of Excellence</div>
                    <div className="text-[#2E2E2E]/70 text-sm">Transforming education since 2018</div>
                  </div>
                </div>
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
              Our <span className="text-[#EF5350]">Values</span>
            </h2>
            <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">
              These core values guide everything we do at EDU CLUB.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-[#EF5350] mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">{value.title}</h3>
                <p className="text-[#2E2E2E]/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#2E2E2E]">
              Meet Our <span className="text-[#EF5350]">Team</span>
            </h2>
            <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">
              The passionate individuals behind EDU CLUB who work tirelessly to provide the best learning experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2E2E2E]">{member.name}</h3>
                  <p className="text-[#EF5350] font-medium mb-3">{member.role}</p>
                  <p className="text-[#2E2E2E]/70 text-sm">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    {["twitter", "linkedin", "github"].map((social) => (
                      <a key={social} href="#" className="text-[#2E2E2E]/60 hover:text-[#EF5350] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">Our Mission</h2>
              <div className="space-y-4 text-[#2E2E2E]/80">
                <p>
                  At EDU CLUB, our mission is to transform lives through education. We believe that everyone deserves
                  access to high-quality learning opportunities that can help them achieve their personal and
                  professional goals.
                </p>
                <p>We are committed to:</p>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Providing accessible, affordable, and high-quality education to learners worldwide</li>
                  <li>Creating engaging and effective learning experiences that inspire and motivate</li>
                  <li>Building a supportive community where students can connect and collaborate</li>
                  <li>Continuously innovating to improve our platform and course offerings</li>
                  <li>Empowering individuals to transform their lives and careers through learning</li>
                </ul>
                <p>
                  Through our platform, we aim to break down the barriers to education and create a world where learning
                  is a lifelong journey accessible to all.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-[#EF5350] text-white px-6 py-3 rounded-full font-medium hover:bg-[#E53935] transition-colors"
              >
                Join Our Mission
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">
              Join Our <span className="text-[#EF5350]">Journey</span>
            </h2>
            <p className="text-[#2E2E2E]/80 mb-8">
              Whether you're a student looking to learn new skills, an instructor with expertise to share, or a partner
              interested in collaboration, we invite you to join us on our mission to transform education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EF5350] text-white px-8 py-3 rounded-full font-medium hover:bg-[#E53935] transition-colors"
              >
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#2E2E2E] px-8 py-3 rounded-full font-medium border border-[#2E2E2E]/20 hover:border-[#2E2E2E]/40 transition-colors"
              >
                Become an Instructor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
