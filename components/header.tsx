"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "../images/Logo.jpg" 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Pricing", href: "/pricing" },
    { name: "Trainers", href: "/trainers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
            <Image
              src={logo} // Adjust the path to your logo image
              alt="BoxMandu Logo"
              width={50}
              height={50}
              className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
              <div className="absolute -inset-1 bg-gradient-to-br from-golden/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                BoxMandu
              </span>
              <div className="text-xs text-golden font-medium">KATHMANDU</div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  pathname === item.href
                    ? "text-golden bg-golden/10"
                    : "text-gray-700 hover:text-golden hover:bg-golden/5"
                }`}
              >
                {item.name}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-golden transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "group-hover:w-full"
                  }`}
                ></div>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {/* <Link href="/login">
              <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-white">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link> */}
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-golden to-golden/90 hover:from-golden/90 hover:to-golden text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === item.href
                      ? "text-golden bg-golden/10"
                      : "text-gray-700 hover:text-golden hover:bg-golden/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-golden text-golden hover:bg-golden hover:text-white"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-golden to-golden/90 text-white">Join Now</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
