"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("cta-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: Star, text: "7-Day Free Trial" },
    { icon: Users, text: "Expert Trainers" },
    { icon: Award, text: "Modern Equipment" },
    { icon: Zap, text: "Flexible Schedule" },
  ]

  return (
    <section
      id="cta-section"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golden/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-golden/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-golden/30 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden/30 to-golden/20 rounded-full border border-golden/50">
              <span className="text-golden font-semibold">Ready to Transform?</span>
            </div>

            <h2 className="text-4xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Start Your</span>
              <span className="block bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Boxing Journey
              </span>
              <span className="block text-white">Today</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied members who have transformed their lives at BoxMandu. Your champion journey
              starts with a single step.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-golden/20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <feature.icon className="w-5 h-5 text-golden" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-golden to-yellow-500 hover:from-golden/90 hover:to-yellow-500/90 text-black font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-golden/25 transform hover:scale-105 transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl group"
              >
                View Pricing
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div
            className={`pt-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-golden mb-2">500+</div>
                  <div className="text-gray-300">Members Joined</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-golden mb-2">98%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-golden mb-2">15+</div>
                  <div className="text-gray-300">Expert Trainers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-golden mb-2">5</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-gray-400 text-lg">
              🥊 <span className="text-golden font-semibold">No commitment required</span> •
              <span className="text-golden font-semibold"> Cancel anytime</span> •
              <span className="text-golden font-semibold"> Money-back guarantee</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
