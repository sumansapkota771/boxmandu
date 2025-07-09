"use client"

import { useState, useEffect, useRef } from "react"
import { Trophy, Target, Heart, Zap } from "lucide-react"

export default function QuickStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ members: 0, trainers: 0, years: 0, classes: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: Trophy,
      label: "Active Members",
      value: 200,
      suffix: "+",
      color: "from-golden to-yellow-500",
    },
    {
      icon: Target,
      label: "Expert Trainers",
      value: 5,
      suffix: "+",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      label: "Years Experience",
      value: 10,
      suffix: "",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      label: "Weekly Classes",
      value: 30,
      suffix: "+",
      color: "from-green-500 to-green-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      stats.forEach((stat, index) => {
        let currentCount = 0
        const increment = stat.value / steps
        const key = ["members", "trainers", "years", "classes"][index] as keyof typeof counts

        const timer = setInterval(() => {
          currentCount += increment
          if (currentCount >= stat.value) {
            currentCount = stat.value
            clearInterval(timer)
          }
          setCounts((prev) => ({ ...prev, [key]: Math.floor(currentCount) }))
        }, stepDuration)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const countValues = [counts.members, counts.trainers, counts.years, counts.classes]
            return (
              <div
                key={index}
                className={`text-center group transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-golden/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                  {countValues[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
