"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TestimonialsPreview() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "BoxMandu completely transformed my fitness journey. The trainers are incredibly knowledgeable and supportive. I've gained confidence, strength, and made amazing friends here.",
      achievement: "Lost 15kg in 6 months",
      location: "Kathmandu",
    },
    {
      name: "Arjun Thapa",
      role: "Business Owner",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "As someone who was completely new to boxing, I was nervous at first. But the community at BoxMandu is so welcoming and encouraging. The structured programs helped me progress safely.",
      achievement: "Competed in first amateur bout",
      location: "Lalitpur",
    },
    {
      name: "Sunita Rai",
      role: "College Student",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The women's boxing classes are fantastic! Sita ma'am is an incredible trainer who focuses on both technique and empowerment. I feel stronger and more confident than ever.",
      achievement: "Became women's class leader",
      location: "Bhaktapur",
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden/20 to-golden/10 rounded-full border border-golden/30">
            <span className="text-golden font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              What Our Members
            </span>
            <span className="block bg-gradient-to-r from-golden to-golden/80 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who have transformed their lives at BoxMandu. Join our community of champions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-golden to-yellow-500"></div>

            <div className="p-8 lg:p-12">
              <Quote className="w-16 h-16 text-golden/20 mb-6" />

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-center lg:justify-start">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-golden fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  <div className="bg-gradient-to-r from-golden/10 to-golden/5 rounded-2xl p-4 border border-golden/20">
                    <div className="text-golden font-semibold text-lg">
                      🏆 {testimonials[currentTestimonial].achievement}
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left space-y-4">
                  <div className="relative inline-block">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={120}
                      height={120}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-golden text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-black text-xl">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    <div className="text-golden font-medium text-sm">{testimonials[currentTestimonial].location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-6 mb-8">
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="sm"
            className="border-golden text-golden hover:bg-golden hover:text-white rounded-full w-12 h-12 p-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-golden scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="sm"
            className="border-golden text-golden hover:bg-golden hover:text-white rounded-full w-12 h-12 p-0"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-golden mb-2">500+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-golden mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-golden mb-2">2000+</div>
              <div className="text-gray-600">Pounds Lost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-golden mb-2">50+</div>
              <div className="text-gray-600">Competition Winners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
