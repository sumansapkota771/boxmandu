import Image from "next/image"
import { Award, Star, Users } from "lucide-react"

export default function Trainers() {
  const trainers = [
    {
      name: "Rajesh Maharjan",
      title: "Head Coach & Founder",
      experience: "12 Years Experience",
      specialties: ["Professional Boxing", "Competition Prep", "Advanced Techniques"],
      achievements: ["National Boxing Champion 2018", "Certified Boxing Coach", "200+ Students Trained"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Sita Gurung",
      title: "Women's Boxing Specialist",
      experience: "8 Years Experience",
      specialties: ["Women's Boxing", "Self-Defense", "Fitness Boxing"],
      achievements: ["Women's Boxing Champion", "Self-Defense Instructor", "Youth Program Developer"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Bikash Tamang",
      title: "Fitness & Conditioning Coach",
      experience: "10 Years Experience",
      specialties: ["HIIT Training", "Strength & Conditioning", "Weight Management"],
      achievements: ["Certified Fitness Trainer", "Sports Nutrition Specialist", "Injury Prevention Expert"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Anita Shrestha",
      title: "Youth Boxing Coach",
      experience: "6 Years Experience",
      specialties: ["Youth Training", "Beginner Programs", "Character Development"],
      achievements: ["Youth Development Specialist", "Child Psychology Certified", "150+ Young Athletes Trained"],
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Meet Your
            <span className="text-golden block">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified trainers bring years of experience and passion to help you achieve your boxing and fitness
            goals safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">{trainer.name}</h3>
                  <p className="text-golden font-medium mb-2">{trainer.title}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-1" />
                    {trainer.experience}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, specialtyIndex) => (
                      <span key={specialtyIndex} className="px-2 py-1 bg-golden/10 text-golden text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-black mb-2">Achievements:</h4>
                  <ul className="space-y-1">
                    {trainer.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm text-gray-600">
                        <Star className="w-3 h-3 text-golden mr-2 mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-golden/10 rounded-xl mb-4 mx-auto">
                  <Users className="w-8 h-8 text-golden" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">15+</div>
                <div className="text-gray-600">Certified Trainers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-golden/10 rounded-xl mb-4 mx-auto">
                  <Award className="w-8 h-8 text-golden" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-golden/10 rounded-xl mb-4 mx-auto">
                  <Star className="w-8 h-8 text-golden" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">1000+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
