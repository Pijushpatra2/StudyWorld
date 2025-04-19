"use client"
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"


  const categories = [
    "All Courses",
    "Mathematics",
    "Science & Experiments",
    "English Language & Literature",
    "Environmental Studies (EVS)",
    "Computer Science & Coding",
    "Hindi & Regional Languages",
    "General Knowledge & Current Affairs",
    "Arts & Crafts",
    "Health & Physical Education",
    "Music & Performing Arts",
    "Life Skills & Personal Development"
  ];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]

const ratings = ["4.5 & up", "4.0 & up", "3.5 & up", "3.0 & up"]

const courses = [
  {
    id: 1,
    title: "Mathematics Foundations: Numbers & Operations",
    category: "Mathematics",
    rating: 4.8,
    students: 9234,
    image: "/placeholder.svg?height=200&width=300",
    price: "$49.99",
    instructor: "Anita Sharma",
    level: "Class 2",
    bestseller: true,
  },
  {
    id: 2,
    title: "Science Lab Basics: Understanding Experiments",
    category: "Science",
    rating: 4.7,
    students: 7123,
    image: "/placeholder.svg?height=200&width=300",
    price: "$59.99",
    instructor: "Rahul Verma",
    level: "Class 6",
    bestseller: false,
  },
  {
    id: 3,
    title: "English Grammar & Writing Skills",
    category: "English",
    rating: 4.9,
    students: 10456,
    image: "/placeholder.svg?height=200&width=300",
    price: "$64.99",
    instructor: "Pooja Mehta",
    level: "Class 5",
    bestseller: true,
  },
  {
    id: 4,
    title: "History Through Stories: Ancient Civilizations",
    category: "Social Studies",
    rating: 4.6,
    students: 6543,
    image: "/placeholder.svg?height=200&width=300",
    price: "$54.99",
    instructor: "Vikram Das",
    level: "Class 7",
    bestseller: false,
  },
  {
    id: 5,
    title: "Basic Coding with Scratch",
    category: "Computer Science",
    rating: 4.8,
    students: 8321,
    image: "/placeholder.svg?height=200&width=300",
    price: "$74.99",
    instructor: "Meena Iyer",
    level: "Class 4",
    bestseller: true,
  },
  {
    id: 6,
    title: "Physics Essentials: Force & Motion",
    category: "Science",
    rating: 4.7,
    students: 5231,
    image: "/placeholder.svg?height=200&width=300",
    price: "$69.99",
    instructor: "Arjun Sen",
    level: "Class 9",
    bestseller: false,
  },
  {
    id: 7,
    title: "Commerce Starter Pack: Economics & Trade",
    category: "Commerce",
    rating: 4.5,
    students: 3421,
    image: "/placeholder.svg?height=200&width=300",
    price: "$84.99",
    instructor: "Neha Agarwal",
    level: "Class 11",
    bestseller: true,
  },
  {
    id: 8,
    title: "Environmental Science: Our Planet & Us",
    category: "EVS",
    rating: 4.6,
    students: 4982,
    image: "/placeholder.svg?height=200&width=300",
    price: "$44.99",
    instructor: "Sandeep Roy",
    level: "Class 3",
    bestseller: false,
  }
]


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
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-[#2E2E2E]">
          {course.level}
        </div>
        {course.bestseller && (
          <div className="absolute top-3 left-3 bg-[#EF5350] px-2 py-1 rounded-full text-xs font-medium text-white">
            Bestseller
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-[#F5F5F0] rounded-full text-[#2E2E2E]">
            {course.category}
          </span>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-[#2E2E2E]">{course.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">{course.title}</h3>
        <p className="text-sm text-[#2E2E2E]/70 mb-3">By {course.instructor}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#EF5350] font-bold">{course.price}</span>
          <span className="text-xs text-[#2E2E2E]/60">{course.students.toLocaleString()} students</span>
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
  )
}

const FilterSection = ({ title, options }) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-[#2E2E2E] mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`${title.toLowerCase()}-${index}`}
              className="h-4 w-4 rounded border-gray-300 text-[#EF5350] focus:ring-[#EF5350]"
            />
            <label htmlFor={`${title.toLowerCase()}-${index}`} className="ml-2 text-sm text-[#2E2E2E]">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

const CoursesPage = () => {
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
              Explore Our <span className="text-[#EF5350]">Courses</span>
            </h1>
            <p className="mt-4 text-[#2E2E2E]/70 max-w-2xl mx-auto">
              Browse through our extensive collection of courses designed to help you achieve your learning goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/4"
            >
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#2E2E2E] mb-4">Filters</h2>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search courses..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                    />
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                <FilterSection title="Categories" options={categories.slice(0, 6)} />
                <FilterSection title="Level" options={levels} />
                <FilterSection title="Rating" options={ratings} />

                <div className="mt-6">
                  <h3 className="font-bold text-[#2E2E2E] mb-3">Price Range</h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                    />
                    <span className="text-[#2E2E2E]">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-8 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-[#EF5350] text-white py-2 rounded-lg font-medium hover:bg-[#E53935] transition-colors"
                  >
                    Apply Filters
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-white text-[#2E2E2E] py-2 rounded-lg font-medium border border-[#2E2E2E]/20 hover:border-[#2E2E2E]/40 transition-colors"
                  >
                    Reset
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Courses Grid */}
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <h2 className="text-xl font-bold text-[#2E2E2E]">
                    Showing <span className="text-[#EF5350]">{courses.length}</span> courses
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center mt-4 md:mt-0"
                >
                  <label htmlFor="sort" className="mr-2 text-sm text-[#2E2E2E]">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <CourseCard key={course.id} course={course} index={index} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-12 flex justify-center"
              >
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`px-4 py-2 rounded-md ${
                        page === 1 ? "bg-[#EF5350] text-white" : "bg-white text-[#2E2E2E] hover:bg-[#EF5350]/10"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-4 py-2 rounded-md bg-white text-[#2E2E2E] hover:bg-[#EF5350]/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CoursesPage
