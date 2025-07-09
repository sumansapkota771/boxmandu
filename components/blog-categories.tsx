"use client"

import { Search, Tag, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BlogCategories() {
  const categories = [
    { name: "Training Tips", count: 12 },
    { name: "Nutrition", count: 8 },
    { name: "Community", count: 6 },
    { name: "Mental Training", count: 5 },
    { name: "Equipment", count: 4 },
    { name: "Health", count: 7 },
  ]

  const popularPosts = [
    "5 Essential Boxing Techniques",
    "Women's Boxing in Nepal",
    "Nutrition for Athletes",
    "Mental Preparation Guide",
  ]

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-black mb-4">Search Articles</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input type="text" placeholder="Search for articles..." className="pl-10" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-black mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-golden" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-golden/5 cursor-pointer transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-golden">{category.name}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-black mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-golden" />
          Popular Posts
        </h3>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <div key={index} className="p-3 rounded-lg hover:bg-golden/5 cursor-pointer transition-colors group">
              <span className="text-gray-700 group-hover:text-golden text-sm">{post}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-golden/10 to-golden/5 rounded-2xl p-6 border border-golden/20">
        <h3 className="text-xl font-bold text-black mb-3">Stay Updated</h3>
        <p className="text-gray-600 mb-4 text-sm">Get the latest boxing tips and news delivered to your inbox.</p>
        <div className="space-y-3">
          <Input type="email" placeholder="Enter your email" className="border-golden/30" />
          <Button className="w-full bg-gradient-to-r from-golden to-golden/90 text-white">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}
