export default function Testimonials() {
  const testimonials = [
    { 
      name: "Sarah Anderson", 
      role: "Product Designer",
      text: "EduLearn transformed my career. The courses are incredibly practical and the instructors are truly passionate about teaching",
      rating: 5
    },
    { 
      name: "James Chen", 
      role: "Full Stack Developer",
      text: "I completed 5 courses and landed my dream job. The skills I learned are directly applicable to real-world projects.",
      rating: 5
    },
    { 
      name: "Emma Watson", 
      role: "Data Scientist",
      text: "Outstanding content quality and community support. This platform made complex topics easy to understand.",
      rating: 5
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Students Worldwide</h2>
          <p className="text-xl text-gray-600">See what our students have to say about their learning journey</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}