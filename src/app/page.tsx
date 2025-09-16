import { CTAButton } from "@/components"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/layout/Hero"
import { LogoStrip } from "@/components/layout/LogoStrip"
import { LearnSection } from "@/components/layout/LearnSection"
import { SolveSection } from "@/components/layout/SolveSection"
import { NoCodeSection } from "@/components/layout/NoCodeSection"
import { TestimonialsSection } from "@/components/layout/TestimonialsSection"
import { CtaBand } from "@/components/layout/CtaBand"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-white">
      <Navbar />
      <Hero />
      <LogoStrip />
      <LearnSection />
      <SolveSection />
      <NoCodeSection />
      <TestimonialsSection />
      <CtaBand />
      <Footer />
    </div>
  )
}
