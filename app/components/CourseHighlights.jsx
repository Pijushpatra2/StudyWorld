"use client";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    category: "Programming",
    rating: 4.9,
    students: 1234,
    image: "/placeholder.svg?height=200&width=300",
    price: "$89.99",
    instructor: "John Smith",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    category: "Data Science",
    rating: 4.8,
    students: 987,
    image: "/placeholder.svg?height=200&width=300",
    price: "$79.99",
    instructor: "Sarah Johnson",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    category: "Marketing",
    rating: 4.7,
    students: 756,
    image: "/placeholder.svg?height=200&width=300",
    price: "$69.99",
    instructor: "Michael Brown",
    level: "All Levels",
  },
  {
    id: 4,
    title: "UX/UI Design Principles",
    category: "Design",
    rating: 4.9,
    students: 543,
    image: "/placeholder.svg?height=200&width=300",
    price: "$99.99",
    instructor: "Emily Davis",
    level: "Intermediate",
  },
];

const categories = [
  "All Categories",
  "Programming",
  "Data Science",
  "Marketing",
  "Design",
  "Business",
];

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-[#2E2E2E]">
          {course.level}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-[#F5F5F0] rounded-full text-[#2E2E2E]">
            {course.category}
          </span>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-[#2E2E2E]">
              {course.rating}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-[#2E2E2E]/70 mb-3">By {course.instructor}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#EF5350] font-bold">{course.price}</span>
          <span className="text-xs text-[#2E2E2E]/60">
            {course.students} students
          </span>
        </div>
      </div>
      <div className="px-5 pb-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#43A047] text-white py-2 rounded-lg font-medium hover:bg-[#388E3C] transition-colors"
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const CourseHighlights = () => {
  return (
    <section className="py-16 bg-[#F5F5F0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E]">
            Popular <span className="text-[#EF5350]">Courses</span>
          </h2>
          <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">
            Discover our most popular courses chosen by thousands of students
            worldwide. Start your learning journey today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-[#EF5350] text-white"
                  : "bg-white text-[#2E2E2E] hover:bg-[#EF5350]/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#EF5350] border border-[#EF5350] px-8 py-3 rounded-full font-medium hover:bg-[#EF5350]/5 transition-colors"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseHighlights;
