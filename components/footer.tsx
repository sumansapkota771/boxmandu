"use client"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-golden rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white">BoxMandu</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Nepal's premier boxing gym, transforming lives through the art of boxing. Join our community and discover
              your inner champion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-golden transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-golden transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-golden transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-gray-400 hover:text-golden transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-golden transition-colors">
                  Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                  Boxing Fundamentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                  Group Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                  Youth Boxing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                  Women's Boxing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                  Competition Prep
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Thamel, Kathmandu 44600</p>
                  <p>Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+977-1-4441234</p>
                  <p>+977-9841234567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden flex-shrink-0" />
                <div className="text-gray-400">
                  <p>info@boxmandu.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} BoxMandu. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
