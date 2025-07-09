import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutComponent from "@/components/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <AboutComponent />
      </main>
      <Footer />
    </div>
  )
}
