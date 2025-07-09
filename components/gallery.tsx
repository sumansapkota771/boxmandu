"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Boxing training session",
      category: "Training",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Modern gym equipment",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Group boxing class",
      category: "Classes",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Personal training session",
      category: "Training",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Boxing ring and equipment",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Women's boxing class",
      category: "Classes",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sparring session",
      category: "Training",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Gym interior view",
      category: "Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Youth boxing program",
      category: "Classes",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Gallery</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            See BoxMandu
            <span className="text-golden block">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look inside our world-class facilities and see our community of boxers training, learning, and
            achieving their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-golden text-white px-3 py-1 rounded-full text-sm font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-golden transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Visit Our Facilities</h3>
            <p className="text-gray-600 mb-6">
              Experience our state-of-the-art boxing gym in person. Schedule a tour and see why BoxMandu is Kathmandu's
              premier boxing destination.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-golden mb-2">3000+ sq ft</div>
                <div className="text-gray-600">Training Space</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-golden mb-2">2</div>
                <div className="text-gray-600">Professional Rings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-golden mb-2">50+</div>
                <div className="text-gray-600">Equipment Pieces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
