"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert(`Thank you ${formData.name}! We'll get back to you within 24 hours.`)
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: "general",
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Ready to Start
            <span className="text-golden block">Your Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Boxmandu 🥊 the place to be if you want to LEARN,IMPROVE,MASTER.Want to start boxing now?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Location</h4>
                    <p className="text-gray-600">
                      Bouddha, Kathmandu 44600
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Branch Location</h4>
                    <p className="text-gray-600">
                      lazimpat, Kathmandu 44600
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Phone Main branch</h4>
                    <p className="text-gray-600">
                      +981-3261944
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Phone Lazimpat branch</h4>
                    <p className="text-gray-600">
                      +981-3261944
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@boxmandu.com
                      <br />
                      training@boxmandu.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Mon - Fri: 6:00 AM - 9:00 PM
                      <br />
                      Sat - Sun: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Find Us</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Thamel, Kathmandu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="+977-9841234567"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-black mb-2">
                  I'm Interested In *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                >
                  <option value="general">General Information</option>
                  <option value="trial">Free Trial Class</option>
                  <option value="membership">Membership Plans</option>
                  <option value="personal">Personal Training</option>
                  <option value="group">Group Classes</option>
                  <option value="youth">Youth Programs</option>
                  <option value="competition">Competition Training</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell us about your goals, experience level, or any questions you have..."
                />
              </div>

              <Button type="submit" className="w-full bg-golden hover:bg-golden/90 text-white py-3 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 p-4 bg-golden/5 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Free Trial Available!</strong> First-time visitors get a complimentary trial class. No equipment
                needed - we provide everything!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
