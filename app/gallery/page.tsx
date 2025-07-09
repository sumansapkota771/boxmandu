import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryComponent from "@/components/gallery"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <GalleryComponent />
      </main>
      <Footer />
    </div>
  )
}
