"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function PricingPreview() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners",
      monthlyPrice: 2500,
      yearlyPrice: 25000,
      features: ["Access to group classes", "Basic equipment usage", "Locker room access", "2 classes per week"],
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Champion",
      description: "Most popular choice",
      monthlyPrice: 4500,
      yearlyPrice: 45000,
      features: [
        "Unlimited group classes",
        "All equipment access",
        "1 personal training session/month",
        "Priority booking",
      ],
      popular: true,
      color: "from-golden to-yellow-500",
    },
    {
      name: "Elite",
      description: "For serious athletes",
      monthlyPrice: 7500,
      yearlyPrice: 75000,
      features: [
        "Everything in Champion",
        "4 personal training sessions/month",
        "Competition preparation",
        "24/7 gym access",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden/20 to-golden/10 rounded-full border border-golden/30">
            <span className="text-golden font-semibold">Membership Plans</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">Choose Your</span>
            <span className="block bg-gradient-to-r from-golden to-golden/80 bg-clip-text text-transparent">
              Training Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing options designed to fit your budget and training goals. All plans include access to our
            world-class facilities.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-white text-black shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                billingPeriod === "yearly"
                  ? "bg-white text-black shadow-lg transform scale-105"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-golden to-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                plan.popular ? "ring-2 ring-golden scale-105" : "hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-golden to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-black">
                      NPR{" "}
                      {billingPeriod === "monthly"
                        ? plan.monthlyPrice.toLocaleString()
                        : plan.yearlyPrice.toLocaleString()}
                    </div>
                    <div className="text-gray-600">per {billingPeriod === "monthly" ? "month" : "year"}</div>
                    {billingPeriod === "yearly" && (
                      <div className="text-sm text-golden font-semibold">
                        Save NPR {(plan.monthlyPrice * 12 - plan.yearlyPrice).toLocaleString()} annually
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-golden to-yellow-500 hover:from-golden/90 hover:to-yellow-500/90 text-white shadow-lg hover:shadow-xl"
                      : "bg-white border-2 border-golden text-golden hover:bg-golden hover:text-white"
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-6">
          <div className="bg-gradient-to-r from-golden/10 to-golden/5 rounded-2xl p-8 max-w-4xl mx-auto border border-golden/20">
            <h3 className="text-2xl font-bold text-black mb-4">All Plans Include</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-golden font-bold text-lg">7-Day Free Trial</div>
                <div className="text-gray-600 text-sm">No commitment required</div>
              </div>
              <div className="text-center">
                <div className="text-golden font-bold text-lg">Student Discounts</div>
                <div className="text-gray-600 text-sm">With valid student ID</div>
              </div>
              <div className="text-center">
                <div className="text-golden font-bold text-lg">Money-Back Guarantee</div>
                <div className="text-gray-600 text-sm">30-day satisfaction guarantee</div>
              </div>
            </div>
          </div>

          <Link href="/pricing">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-golden text-golden hover:bg-golden hover:text-white px-8 py-4 text-lg group"
            >
              View Detailed Pricing
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
