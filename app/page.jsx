"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import CourseHighlights from "./components/CourseHighlights"
import Testimonials from "./components/Testimonials"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"
import CoursesKind from '../app/components/CoursesKind'
import Offerings from '../app/components/ExploreOfferings'
import About from './components/About'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <Hero />
      <About/>
      <CourseHighlights />
      <CoursesKind/>
      <Offerings/>
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  )
}
