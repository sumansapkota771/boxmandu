import { Dumbbell, Users, Target, Zap, Clock, Award } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your goals.",
      features: ["Customized workout plans", "Technique refinement", "Progress tracking"],
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy group sessions that build community and motivation.",
      features: ["Beginner to advanced levels", "Small class sizes", "Social atmosphere"],
    },
    {
      icon: Target,
      title: "Boxing Fundamentals",
      description: "Master the basics with our comprehensive fundamentals program.",
      features: ["Proper stance and footwork", "Basic combinations", "Defense techniques"],
    },
    {
      icon: Zap,
      title: "HIIT Boxing",
      description: "High-intensity interval training combined with boxing techniques.",
      features: ["Fat burning workouts", "Cardio conditioning", "Strength building"],
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Train on your schedule with our flexible class timings.",
      features: ["Early morning classes", "Evening sessions", "Weekend availability"],
    },
    {
      icon: Award,
      title: "Competition Prep",
      description: "Specialized training for those looking to compete professionally.",
      features: ["Advanced techniques", "Sparring sessions", "Mental preparation"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Training Programs
            <span className="text-golden block">For Every Level</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginners taking their first swing to professionals preparing for competition, we have the perfect
            program to match your boxing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-golden/10 rounded-xl mb-6">
                <service.icon className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-golden rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
