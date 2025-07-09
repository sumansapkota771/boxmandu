"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Target, Zap, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
  import service1 from "../images/hero1.jpg"
  import service2 from "../images/featured.jpeg" // Placeholder images, replace with actual service images
  import service3 from "../images/hero2.jpg" // Placeholder images, replace with actual service images
  import service4 from "../images/hero1.jpg" // Placeholder images, replace with actual service images

export default function FeaturedServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
      features: ["Customized workout plans", "Technique refinement", "Progress tracking", "Flexible scheduling"],
      image: service1 ,
      price: "From NPR 1,500/session",
      rating: 4.9,
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy group sessions that build community, motivation, and lasting friendships.",
      features: ["Beginner to advanced levels", "Small class sizes", "Social atmosphere", "Variety of styles"],
      image: service2,
      price: "From NPR 2,500/month",
      rating: 4.8,
    },
    {
      icon: Target,
      title: "Boxing Fundamentals",
      description: "Master the basics with our comprehensive fundamentals program designed for all skill levels.",
      features: ["Proper stance and footwork", "Basic combinations", "Defense techniques", "Safety protocols"],
      image: service3,
      price: "From NPR 3,000/month",
      rating: 4.9,
    },
    {
      icon: Zap,
      title: "HIIT Boxing",
      description: "High-intensity interval training combined with boxing for maximum calorie burn and fitness.",
      features: ["Fat burning workouts", "Cardio conditioning", "Strength building", "Time-efficient"],
      image: service4,
      price: "From NPR 3,500/month",
      rating: 4.7,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden/20 to-golden/10 rounded-full border border-golden/30">
            <span className="text-golden font-semibold">Featured Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              Training Programs
            </span>
            <span className="block bg-gradient-to-r from-golden to-golden/80 bg-clip-text text-transparent">
              For Every Level
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From beginners taking their first swing to professionals preparing for competition, we have the perfect
            program to match your boxing journey and fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-golden fill-current mr-1" />
                  <span className="text-sm font-semibold">{service.rating}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br from-golden/20 to-golden/10 rounded-xl flex items-center justify-center transform transition-all duration-300 ${hoveredService === index ? "scale-110 bg-gradient-to-br from-golden to-golden/80" : ""}`}
                  >
                    <service.icon
                      className={`w-6 h-6 transition-colors duration-300 ${hoveredService === index ? "text-white" : "text-golden"}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black group-hover:text-golden transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-golden font-semibold text-sm">{service.price}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-golden rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-golden to-golden/90 hover:from-golden/90 hover:to-golden text-white group-hover:shadow-lg transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-golden text-golden hover:bg-golden hover:text-white px-8 py-4 text-lg group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
