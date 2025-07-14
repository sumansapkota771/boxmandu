"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Award, Star, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import trainer1 from "../images/hero1.jpg"
import trainer2 from "../images/featured.jpeg" // Placeholder images, replace with actual service images
import trainer3 from "../images/hero2.jpg" // Placeholder images, replace with actual service images
import trainer4 from "../images/hero1.jpg"

export default function FeaturedTrainers() {
  const [activeTrainer, setActiveTrainer] = useState(0)

  const trainers = [
    {
      name: "Rajesh Maharjan",
      title: "Head Coach & Founder",
      experience: "12 Years Experience",
      specialties: ["Professional Boxing", "Competition Prep", "Advanced Techniques"],
      achievements: ["National Boxing Champion 2018", "Certified Boxing Coach", "200+ Students Trained"],
      image: trainer1,
      rating: 4.9,
      students: 200,
      bio: "Rajesh brings over a decade of professional boxing experience to BoxMandu. His passion for the sport and dedication to student success has made him one of Nepal's most respected boxing coaches.",
    },
    
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden/20 to-golden/10 rounded-full border border-golden/30">
            <span className="text-golden font-semibold">Expert Trainers</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Meet Your</span>
            <span className="block bg-gradient-to-r from-golden to-golden/80 bg-clip-text text-transparent">
              Champions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our certified trainers bring years of experience and passion to help you achieve your boxing and fitness
            goals safely and effectively.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Trainer Cards */}
          <div className="space-y-6">
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeTrainer === index
                    ? "bg-gradient-to-r from-golden/10 to-golden/5 border-2 border-golden/30 shadow-xl"
                    : "bg-white border border-gray-200 hover:border-golden/30 hover:shadow-lg"
                }`}
                onClick={() => setActiveTrainer(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Image
                      src={trainer.image || "/placeholder.svg"}
                      alt={trainer.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-golden text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-1">{trainer.name}</h3>
                    <p className="text-golden font-semibold mb-2">{trainer.title}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {trainer.experience}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-golden fill-current" />
                        {trainer.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {trainer.students}+ students
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.slice(0, 2).map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="px-3 py-1 bg-golden/10 text-golden text-xs rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Trainer Details */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              <Image
                src={trainers[activeTrainer].image || "/placeholder.svg"}
                alt={trainers[activeTrainer].name}
                width={500}
                height={600}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{trainers[activeTrainer].name}</h3>
                <p className="text-golden font-semibold">{trainers[activeTrainer].title}</p>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <p className="text-gray-600 leading-relaxed">{trainers[activeTrainer].bio}</p>

              <div>
                <h4 className="font-semibold text-black mb-3">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {trainers[activeTrainer].specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="px-3 py-2 bg-golden/10 text-golden text-sm rounded-lg font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {trainers[activeTrainer].achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-sm text-gray-600">
                      <Star className="w-4 h-4 text-golden mr-2 mt-0.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-gradient-to-r from-golden to-golden/90 hover:from-golden/90 hover:to-golden text-white">
                Book Session with {trainers[activeTrainer].name.split(" ")[0]}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/trainers">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-golden text-golden hover:bg-golden hover:text-white px-8 py-4 text-lg group"
            >
              Meet All Trainers
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
