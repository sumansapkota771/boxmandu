"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "BoxMandu completely transformed my fitness journey. The trainers are incredibly knowledgeable and supportive. I've gained confidence, strength, and made amazing friends here. Best decision I ever made!",
      achievement: "Lost 15kg in 6 months",
    },
    {
      name: "Arjun Thapa",
      role: "Business Owner",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "As someone who was completely new to boxing, I was nervous at first. But the community at BoxMandu is so welcoming and encouraging. The structured programs helped me progress safely and effectively.",
      achievement: "Competed in first amateur bout",
    },
    {
      name: "Sunita Rai",
      role: "College Student",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The women's boxing classes are fantastic! Sita ma'am is an incredible trainer who focuses on both technique and empowerment. I feel stronger and more confident than ever before.",
      achievement: "Became women's class leader",
    },
    {
      name: "Ramesh Gurung",
      role: "Retired Army Officer",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "At 45, I thought my athletic days were behind me. BoxMandu proved me wrong! The trainers adapted the program to my needs, and I'm in the best shape of my life. Highly recommend!",
      achievement: "Improved fitness by 200%",
    },
    {
      name: "Anjali Magar",
      role: "Doctor",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "BoxMandu is more than a gym - it's a community. The stress relief from boxing after long hospital shifts is incredible. The facilities are top-notch and the atmosphere is always positive.",
      achievement: "Stress-free lifestyle achieved",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            What Our Members
            <span className="text-golden block">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our amazing community of boxers who have transformed their lives
            at BoxMandu.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-golden/5 to-white rounded-3xl p-8 lg:p-12 shadow-xl relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-golden/20" />

            <div className="text-center space-y-6">
              <div className="flex justify-center">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-golden fill-current" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-bold text-black text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  <div className="text-golden font-medium text-sm">{testimonials[currentTestimonial].achievement}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="border-golden text-golden hover:bg-golden hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="border-golden text-golden hover:bg-golden hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-golden" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">Our Community Impact</h3>
            <p className="text-gray-600">Real results from real people in our BoxMandu family</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-golden mb-2">500+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-golden mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-golden mb-2">2000+</div>
              <div className="text-gray-600">Pounds Lost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-golden mb-2">50+</div>
              <div className="text-gray-600">Competition Winners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
