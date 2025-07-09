import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactComponent from "@/components/contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  )
}
