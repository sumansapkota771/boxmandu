import Header from "@/components/header"
import Footer from "@/components/footer"
import ScheduleComponent from "@/components/schedule"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ScheduleComponent />
      </main>
      <Footer />
    </div>
  )
}
