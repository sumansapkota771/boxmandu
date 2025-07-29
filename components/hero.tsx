"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Award, Users, Clock, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import featured from "../images/gallary/gallary4.png"
import hero1 from "../images/gallary/gallary5.jpg"
import hero2 from "../images/gallary/gallary2.jpg"


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const heroSlides = [
    {
      title: "Train Like a Champion",
      subtitle: "Transform Your Body & Mind",
      description: "Join Nepal's premier boxing gym and discover your inner strength with world-class training.",
      image: hero1,
      cta: "Start Your Journey",
    },
    {
      title: "Expert Trainers",
      subtitle: "Professional Guidance",
      description: "Learn from certified professionals with years of experience in competitive boxing.",
      image: hero2,
      cta: "Meet Our Trainers",
    },
    {
      title: "Modern Facilities",
      subtitle: "World-Class Equipment",
      description: "Train with the best equipment in a safe, clean, and motivating environment.",
      image: featured,
      cta: "View Gallery",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-golden/5 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golden/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-golden/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-golden/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div
            className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden/20 to-golden/10 rounded-full border border-golden/30">
                <Award className="w-5 h-5 text-golden mr-3" />
                <span className="text-golden font-semibold">Premium Boxing Gym in Kathmandu</span>
                <div className="flex ml-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-golden fill-current" />
                  ))}
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title.split(" ").slice(0, -1).join(" ")}
                </span>
                <span className="block bg-gradient-to-r from-golden to-golden/80 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].title.split(" ").slice(-1)}
                </span>
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">{heroSlides[currentSlide].description}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-golden to-golden/90 hover:from-golden/90 hover:to-golden text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-golden text-golden hover:bg-golden hover:text-white px-8 py-4 text-lg group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden/20 to-golden/10 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-golden" />
                </div>
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden/20 to-golden/10 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-golden" />
                </div>
                <div className="text-3xl font-bold text-black">15+</div>
                <div className="text-sm text-gray-600">Expert Trainers</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden/20 to-golden/10 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-golden" />
                </div>
                <div className="text-3xl font-bold text-black">5</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={heroSlides[currentSlide].image || "/placeholder.svg"}
                  alt="BoxMandu Boxing Training"
                  width={800}
                  height={600}
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-golden to-golden/80 rounded-2xl rotate-12 shadow-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-black/10 to-transparent rounded-2xl -rotate-12"></div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-golden scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
