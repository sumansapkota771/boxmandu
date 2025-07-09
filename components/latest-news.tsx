"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LatestNews() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      title: "5 Essential Boxing Techniques Every Beginner Should Master",
      excerpt:
        "Starting your boxing journey? Learn the fundamental techniques that will build a strong foundation for your training.",
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
        "Discover how women's boxing is growing in Nepal and why more women are choosing boxing for fitness and empowerment.",
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
        "Fuel your training with the right nutrition. Our comprehensive guide to eating for optimal boxing performance.",
      author: "Bikash Tamang",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Nutrition",
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden/20 to-golden/10 rounded-full border border-golden/30">
            <span className="text-golden font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Boxing News &</span>
            <span className="block bg-gradient-to-r from-golden to-golden/80 bg-clip-text text-transparent">
              Training Tips
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest boxing techniques, training tips, and community news from BoxMandu.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <div
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredPost(0)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={800}
                  height={400}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-golden text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {blogPosts[0].category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-golden transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Posts */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <div
                key={index + 1}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredPost(index + 1)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className="flex">
                  <div className="w-1/3">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-2/3 p-4 space-y-3">
                    <div>
                      <span className="text-golden text-xs font-semibold uppercase tracking-wide">{post.category}</span>
                    </div>
                    <h4 className="font-bold text-black group-hover:text-golden transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-golden/10 to-golden/5 rounded-2xl p-6 border border-golden/20">
              <h3 className="text-xl font-bold text-black mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Get the latest boxing tips, training updates, and gym news delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-golden/30 focus:outline-none focus:ring-2 focus:ring-golden/50"
                />
                <Button className="w-full bg-gradient-to-r from-golden to-golden/90 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-golden text-golden hover:bg-golden hover:text-white px-8 py-4 text-lg group"
            >
              Read All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
