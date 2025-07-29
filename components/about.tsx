import { Target, Shield, Trophy, Heart } from "lucide-react";
import Image from "next/image";
import aboutimage from "../images/featured.jpeg"; // Placeholder image, replace with actual image path

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision Training",
      description:
        "Boxing for Fitness – High-intensity workouts designed to build strength, stamina, and confidence.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Open and supportive space for men, women, and children.",
    },
    {
      icon: Trophy,
      title: "Championship Mindset",
      description:
        "Beginner to Advanced Classes – Structured training programs tailored to personal goals.",
    },
    {
      icon: Heart,
      title: "Community Spirit",
      description:
        "Professional Coaching Multiple Convenient Locations – Lazimpat, Boudha, and Chuchepati.With Strong Community Vibe",
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
                  <span className="text-sm font-medium text-golden">
                    About BoxMandu
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-black">
                  Where Champions
                  <span className="text-golden block">Are Made</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Boxmandu is Nepal’s leading boxing and fitness gym, located in
                  the heart of Kathmandu. With a strong focus on discipline,
                  strength, and community, Boxmandu welcomes people of all ages
                  and skill levels—from complete beginners to competitive
                  athletes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is simple: to provide world-class boxing training
                  that transforms not just your physical strength, but your
                  mental resilience, discipline, and confidence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg">
                      <value.icon className="w-6 h-6 text-golden" />
                    </div>
                    <h3 className="font-semibold text-black">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src={aboutimage}
                alt="BoxMandu Gym Interior"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative py-5 px-6 flex items-center justify-center min-h-[200px] mb-10 group overflow-hidden">
        <div className="max-w-3xl text-center border-l-4 border-red-500 pl-6 text-black font-light text-xl sm:text-2xl italic transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-[1.02]">
          “At <span className="text-red-500 font-semibold">Boxmandu</span>, it’s
          not just about throwing punches—it’s about building
          <span className="text-red-400"> character</span>,
          <span className="text-red-400"> fitness</span>, and
          <span className="text-red-400"> inner strength</span>.”
        </div>
      </div>
    </>
  );
}
