import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesComponent from "@/components/services"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  )
}
