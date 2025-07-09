import Header from "@/components/header"
import Footer from "@/components/footer"
import TrainerComponent from "@/components/trainers"

export default function TrainerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <TrainerComponent />
      </main>
      <Footer />
    </div>
  )
}
