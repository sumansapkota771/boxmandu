import { Target, Shield, Trophy, Heart } from "lucide-react"
import Image from "next/image"
import aboutimage from "../images/featured.jpeg" // Placeholder image, replace with actual image path

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision Training",
      description: "Every punch, every move is crafted with precision and purpose.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "State-of-the-art equipment and safety protocols for all skill levels.",
    },
    {
      icon: Trophy,
      title: "Championship Mindset",
      description: "We train champions, not just in the ring but in life.",
    },
    {
      icon: Heart,
      title: "Community Spirit",
      description: "A supportive community that celebrates every victory together.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
                <span className="text-sm font-medium text-golden">About BoxMandu</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Where Champions
                <span className="text-golden block">Are Made</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Located in the heart of Kathmandu, BoxMandu has been Nepal's premier boxing destination since 2019. We
                combine traditional boxing techniques with modern training methods to create an unparalleled fitness
                experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: to provide world-class boxing training that transforms not just your physical
                strength, but your mental resilience, discipline, and confidence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg">
                    <value.icon className="w-6 h-6 text-golden" />
                  </div>
                  <h3 className="font-semibold text-black">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src={aboutimage}
              alt="BoxMandu Gym Interior"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
