"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners",
      monthlyPrice: 2500,
      yearlyPrice: 25000,
      features: [
        "Access to group classes",
        "Basic equipment usage",
        "Locker room access",
        "2 classes per week",
        "Beginner-friendly environment",
      ],
      popular: false,
    },
    {
      name: "Champion",
      description: "Most popular choice",
      monthlyPrice: 4500,
      yearlyPrice: 45000,
      features: [
        "Unlimited group classes",
        "All equipment access",
        "Locker room & shower",
        "1 personal training session/month",
        "Nutrition guidance",
        "Priority booking",
      ],
      popular: true,
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
        "Sparring sessions",
        "Custom meal plans",
        "24/7 gym access",
        "Guest passes (2/month)",
      ],
      popular: false,
    },
  ]

  const handleJoinPlan = (planName: string) => {
    alert(`Thank you for choosing the ${planName} plan! Please contact us to complete your membership.`)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Pricing Plans</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Choose Your
            <span className="text-golden block">Training Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible pricing options designed to fit your budget and training goals. All plans include access to our
            world-class facilities.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "monthly" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "yearly" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-golden text-white px-2 py-1 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                plan.popular ? "ring-2 ring-golden" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-golden text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-black">
                    NPR{" "}
                    {billingPeriod === "monthly"
                      ? plan.monthlyPrice.toLocaleString()
                      : plan.yearlyPrice.toLocaleString()}
                  </div>
                  <div className="text-gray-600">per {billingPeriod === "monthly" ? "month" : "year"}</div>
                  {billingPeriod === "yearly" && (
                    <div className="text-sm text-golden">
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
                onClick={() => handleJoinPlan(plan.name)}
                className={`w-full py-3 ${
                  plan.popular
                    ? "bg-golden hover:bg-golden/90 text-white"
                    : "bg-white border-2 border-golden text-golden hover:bg-golden hover:text-white"
                }`}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 7-day free trial. No commitment required.</p>
          <p className="text-sm text-gray-500">
            Prices are in Nepali Rupees (NPR). Student discounts available with valid ID.
          </p>
        </div>
      </div>
    </section>
  )
}
