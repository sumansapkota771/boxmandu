import Header from "@/components/header"
import Footer from "@/components/footer"
import PricingComponent from "@/components/pricing"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <PricingComponent />
      </main>
      <Footer />
    </div>
  )
}
