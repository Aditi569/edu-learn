export default function Features() {
  const features = [
    { 
      icon: "📚", 
      title: "Comprehensive Curriculum", 
      desc: "Access a wide range of courses from beginner to advanced levels, carefully structured for progressive learning." 
    },
    { 
      icon: "⚡", 
      title: "Learn at Your Pace", 
      desc: "Study whenever and wherever you want. Lifetime access to all course materials and future updates." 
    },
    { 
      icon: "👥", 
      title: "Expert Instructors", 
      desc: "Learn from industry professionals with years of real-world experience and proven teaching methods." 
    },
    { 
      icon: "🎖️", 
      title: "Verified Certificates", 
      desc: "Earn recognized certificates upon completion that enhance your professional credentials." 
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EduLearn?</h2>
          <p className="text-xl text-gray-600">We provide everything you need to succeed in your learning journey</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}