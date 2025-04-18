"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import CourseHighlights from "./components/CourseHighlights"
import Testimonials from "./components/Testimonials"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <Hero />
      <CourseHighlights />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  )
}
