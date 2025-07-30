import Hero from "@/components/hero"
import FeaturedServices from "@/components/featured-services"
import QuickStats from "@/components/quick-stats"
import FeaturedTrainers from "@/components/featured-trainers"
import PricingPreview from "@/components/pricing-preview"
import LatestNews from "@/components/latest-news"
import TestimonialsPreview from "@/components/testimonials-preview"
import CallToAction from "@/components/call-to-action"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickStats />
        <FeaturedServices />
        {/* <FeaturedTrainers /> */}
        {/* <PricingPreview /> */}
        <TestimonialsPreview />
        {/* <LatestNews /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
