"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award } from "lucide-react"

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Monday")

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"]

const schedule = {
  Monday: [
    { time: "6:00 AM", class: "Boxing" },
    { time: "7:30 AM", class: "Boxing" },
    { time: "1:30 PM", class: "Boxing" },
    { time: "3:00 PM", class: "Boxing" },
    { time: "5:00 PM", class: "Boxing" },
    { time: "6:30 PM", class: "Boxing" },
  ],
  Tuesday: [
    { time: "6:00 AM", class: "Boxing" },
    { time: "7:30 AM", class: "Boxing" },
    { time: "1:30 PM", class: "Boxing" },
    { time: "3:00 PM", class: "Boxing" },
    { time: "5:00 PM", class: "Boxing" },
    { time: "6:30 PM", class: "Boxing" },
  ],
  Wednesday: [
    { time: "6:00 AM", class: "Boxing" },
    { time: "7:30 AM", class: "Boxing" },
    { time: "1:30 PM", class: "Boxing" },
    { time: "3:00 PM", class: "Boxing" },
    { time: "5:00 PM", class: "Boxing" },
    { time: "6:30 PM", class: "Boxing" },
  ],
  Thursday: [
    { time: "6:00 AM", class: "Sparring Session" },
    { time: "7:30 AM", class: "Sparring Session" },
    { time: "1:30 PM", class: "Sparring Session" },
    { time: "3:00 PM", class: "Sparring Session" },
    { time: "5:00 PM", class: "Sparring Session" },
    { time: "6:30 PM", class: "Sparring Session" },
  ],
  Friday: [
    { time: "6:00 AM", class: "Cardio" },
    { time: "7:30 AM", class: "Cardio" },
    { time: "1:30 PM", class: "Cardio" },
    { time: "3:00 PM", class: "Cardio" },
    { time: "5:00 PM", class: "Cardio" },
    { time: "6:30 PM", class: "Cardio" },
  ],
  Sunday: [
    { time: "6:00 AM", class: "Boxing" },
    { time: "7:30 AM", class: "Boxing" },
    { time: "1:30 PM", class: "Boxing" },
    { time: "3:00 PM", class: "Boxing" },
    { time: "5:00 PM", class: "Boxing" },
    { time: "6:30 PM", class: "Boxing" },
  ],
};



  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      case "All Levels":
        return "bg-blue-100 text-blue-800"
      case "Youth":
        return "bg-purple-100 text-purple-800"
      case "Family":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleBookClass = (className: string, time: string) => {
    alert(`Booking request for ${className} at ${time} on ${selectedDay}. Please contact us to confirm your booking!`)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Class Schedule</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Weekly
            <span className="text-golden block">Training Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of classes designed for all skill levels. Book your spot and start your boxing
            journey today.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedDay === day ? "bg-golden text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {schedule[selectedDay as keyof typeof schedule].map((classItem, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-golden font-semibold">
                      <Clock className="w-5 h-5 mr-2" />
                      {classItem.time}
                    </div>
                    {/* <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(classItem.level)}`}>
                      {classItem.level}
                    </span> */}
                  </div>

                  <h3 className="text-xl font-bold text-black">{classItem.class}</h3>

                  <div className="flex items-center gap-6 text-gray-600">
                    {/* <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      {classItem.trainer}
                    </div> */}
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {/* {classItem.spots}  */}
                      spots available
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleBookClass(classItem.class, classItem.time)}
                    className="bg-golden hover:bg-golden/90 text-white px-6"
                  >
                    Book Class
                  </Button>
                  {/* <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-white px-6">
                    Learn More
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-golden/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Class Booking Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-black mb-2">Booking Policy:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Classes can be booked up to 7 days in advance</li>
                  <li>• Cancellations must be made 2 hours before class</li>
                  <li>• Late arrivals (15+ minutes) may not be admitted</li>
                  <li>• First-time visitors get a free trial class</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">What to Bring:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Comfortable workout clothes</li>
                  <li>• Water bottle and towel</li>
                  <li>• Hand wraps (available for purchase)</li>
                  <li>• Boxing gloves (available for purchase)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
