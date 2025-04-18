"use client"
import { motion } from "framer-motion"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Search,
  Settings,
  User,
  Menu,
} from "lucide-react"

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F0] flex">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white shadow-md hidden md:block"
      >
        <div className="p-4 border-b">
          <div className="text-2xl font-bold text-[#EF5350]">
            EDU<span className="text-[#43A047]">CLUB</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-[#F5F5F0] overflow-hidden mr-3">
              <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-medium text-[#2E2E2E]">John Doe</div>
              <div className="text-xs text-[#2E2E2E]/60">Web Development Student</div>
            </div>
          </div>
          <nav className="space-y-1">
            {[
              { icon: <LayoutDashboard size={18} />, label: "Dashboard", active: true },
              { icon: <BookOpen size={18} />, label: "My Courses" },
              { icon: <Calendar size={18} />, label: "Schedule" },
              { icon: <FileText size={18} />, label: "Assignments" },
              { icon: <MessageSquare size={18} />, label: "Messages" },
              { icon: <User size={18} />, label: "Profile" },
              { icon: <Settings size={18} />, label: "Settings" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center px-4 py-2 text-sm rounded-lg ${
                  item.active ? "bg-[#EF5350]/10 text-[#EF5350] font-medium" : "text-[#2E2E2E] hover:bg-[#F5F5F0]"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10"
        >
          <div className="flex items-center md:hidden">
            <button className="mr-2">
              <Menu size={24} />
            </button>
            <div className="text-xl font-bold text-[#EF5350]">
              EDU<span className="text-[#43A047]">CLUB</span>
            </div>
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-[#2E2E2E]">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EF5350] focus:border-transparent w-64"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button className="relative p-2 rounded-full hover:bg-[#F5F5F0]">
              <Bell size={20} className="text-[#2E2E2E]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF5350] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#F5F5F0] overflow-hidden">
              <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[#2E2E2E] mb-2">Welcome back, John!</h2>
            <p className="text-[#2E2E2E]/70">Continue your learning journey. You're making great progress!</p>
          </motion.div>

          {/* Progress Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {[
              { label: "Courses in Progress", value: "4", icon: <BookOpen size={24} />, color: "bg-blue-500" },
              { label: "Completed Courses", value: "7", icon: <FileText size={24} />, color: "bg-green-500" },
              { label: "Hours Learned", value: "126", icon: <Clock size={24} />, color: "bg-purple-500" },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex items-center">
                <div
                  className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white mr-4`}
                >
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#2E2E2E]">{stat.value}</div>
                  <div className="text-sm text-[#2E2E2E]/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Continue Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#2E2E2E]">Continue Learning</h3>
              <a href="#" className="text-[#EF5350] text-sm font-medium flex items-center">
                View All <ChevronRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Web Development Bootcamp",
                  instructor: "John Smith",
                  progress: 75,
                  image: "/placeholder.svg?height=150&width=300",
                  lessons: 24,
                  completed: 18,
                },
                {
                  title: "JavaScript Fundamentals",
                  instructor: "Sarah Johnson",
                  progress: 45,
                  image: "/placeholder.svg?height=150&width=300",
                  lessons: 18,
                  completed: 8,
                },
                {
                  title: "Responsive Web Design",
                  instructor: "Michael Brown",
                  progress: 60,
                  image: "/placeholder.svg?height=150&width=300",
                  lessons: 12,
                  completed: 7,
                },
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-40">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button className="bg-white/90 text-[#2E2E2E] rounded-full w-12 h-12 flex items-center justify-center hover:bg-white transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-[#2E2E2E] mb-1">{course.title}</h4>
                    <p className="text-sm text-[#2E2E2E]/70 mb-3">Instructor: {course.instructor}</p>
                    <div className="mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#2E2E2E]/70">
                          {course.completed}/{course.lessons} lessons
                        </span>
                        <span className="font-medium text-[#EF5350]">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#EF5350] h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                    <button className="w-full bg-[#43A047] text-white py-2 rounded-lg font-medium hover:bg-[#388E3C] transition-colors mt-2">
                      Continue Learning
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#2E2E2E]">Upcoming Schedule</h3>
              <a href="#" className="text-[#EF5350] text-sm font-medium flex items-center">
                View Calendar <ChevronRight size={16} />
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {[
                {
                  title: "Live Session: JavaScript DOM Manipulation",
                  time: "Today, 2:00 PM - 3:30 PM",
                  instructor: "Sarah Johnson",
                  course: "JavaScript Fundamentals",
                },
                {
                  title: "Assignment Due: Responsive Layout Project",
                  time: "Tomorrow, 11:59 PM",
                  course: "Responsive Web Design",
                },
                {
                  title: "Group Discussion: Frontend Frameworks",
                  time: "Wed, Apr 20, 4:00 PM - 5:00 PM",
                  instructor: "John Smith",
                  course: "Web Development Bootcamp",
                },
              ].map((event, index) => (
                <div key={index} className={`p-4 flex items-start ${index !== 2 ? "border-b border-gray-200" : ""}`}>
                  <div className="bg-[#EF5350]/10 p-3 rounded-full mr-4">
                    <Calendar size={20} className="text-[#EF5350]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#2E2E2E]">{event.title}</h4>
                    <p className="text-sm text-[#2E2E2E]/70 mt-1">{event.time}</p>
                    {event.instructor && <p className="text-sm text-[#2E2E2E]/70">Instructor: {event.instructor}</p>}
                    <p className="text-sm text-[#43A047] mt-1">Course: {event.course}</p>
                  </div>
                  <button className="text-[#EF5350] text-sm font-medium">Join</button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommended Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#2E2E2E]">Recommended For You</h3>
              <a href="#" className="text-[#EF5350] text-sm font-medium flex items-center">
                Browse All Courses <ChevronRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "React.js for Beginners",
                  instructor: "David Wilson",
                  rating: 4.9,
                  students: 1234,
                  image: "/placeholder.svg?height=150&width=300",
                  price: "$89.99",
                  level: "Beginner",
                },
                {
                  title: "Advanced CSS Techniques",
                  instructor: "Emily Davis",
                  rating: 4.8,
                  students: 987,
                  image: "/placeholder.svg?height=150&width=300",
                  price: "$69.99",
                  level: "Intermediate",
                },
                {
                  title: "Node.js Backend Development",
                  instructor: "Robert Taylor",
                  rating: 4.7,
                  students: 756,
                  image: "/placeholder.svg?height=150&width=300",
                  price: "$94.99",
                  level: "Advanced",
                },
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-[#2E2E2E]">
                      {course.level}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-[#F5F5F0] rounded-full text-[#2E2E2E]">
                        Web Development
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
                      <span className="text-xs text-[#2E2E2E]/60">{course.students} students</span>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <button className="w-full bg-[#43A047] text-white py-2 rounded-lg font-medium hover:bg-[#388E3C] transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
