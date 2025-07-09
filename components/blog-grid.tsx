"use client"

import { useState } from "react"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      title: "5 Essential Boxing Techniques Every Beginner Should Master",
      excerpt:
        "Starting your boxing journey? Learn the fundamental techniques that will build a strong foundation for your training and help you progress safely.",
      author: "Rajesh Maharjan",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Training Tips",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      title: "Women's Boxing: Breaking Barriers in Nepal",
      excerpt:
        "Discover how women's boxing is growing in Nepal and why more women are choosing boxing for fitness, empowerment, and self-defense.",
      author: "Sita Gurung",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Community",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Nutrition Guide for Boxing Athletes",
      excerpt:
        "Fuel your training with the right nutrition. Our comprehensive guide to eating for optimal boxing performance and recovery.",
      author: "Bikash Tamang",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Nutrition",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Mental Preparation: The Champion's Mindset",
      excerpt:
        "Boxing is as much mental as it is physical. Learn how to develop the mental toughness needed to excel in the ring.",
      author: "Rajesh Maharjan",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "Mental Training",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Boxing Equipment Guide: What You Need to Get Started",
      excerpt:
        "New to boxing? Here's everything you need to know about essential boxing equipment and gear for beginners.",
      author: "Anita Shrestha",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Equipment",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      title: "Recovery and Injury Prevention in Boxing",
      excerpt:
        "Learn the best practices for recovery, injury prevention, and maintaining peak performance throughout your boxing journey.",
      author: "Bikash Tamang",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Health",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
  ]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {["All", "Training Tips", "Nutrition", "Community", "Mental Training", "Equipment", "Health"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-golden text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-golden/10 hover:text-golden"
              }`}
            >
              {category}
            </button>
          ),
        )}
      </div>

      <div className="grid gap-8">
        {filteredPosts.map((post, index) => (
          <article
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-2 p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="bg-golden/10 text-golden px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-black group-hover:text-golden transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Button className="bg-golden hover:bg-golden/90 text-white group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
