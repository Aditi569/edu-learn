export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 text-sm">
              🚀 Learn at your own pace
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master New Skills from Industry Experts
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of students learning cutting-edge technologies. Our expertly crafted courses are designed to transform your career and unlock new opportunities.
            </p>
            <div className="flex gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold transition">
                Start Learning Today →
              </button>
              <button className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 font-semibold transition">
                ▶ Watch Demo
              </button>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-gray-600 text-sm">Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">200+</p>
                <p className="text-gray-600 text-sm">Courses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.9★</p>
                <p className="text-gray-600 text-sm">Rating</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-6 h-[420px] flex items-center justify-center shadow-xl">
            <div className="bg-white rounded-2xl w-full h-full p-6 shadow-lg overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-gray-700 font-medium text-sm">Online Learning</span>
                </div>
                <span className="text-gray-400 cursor-pointer">×</span>
              </div>
              
              <div className="mb-4">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Course</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Results</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { name: 'Coding', color: 'bg-orange-400' },
                  { name: 'Graphic', color: 'bg-green-400' },
                  { name: 'Language', color: 'bg-orange-400' },
                  { name: 'Producer', color: 'bg-red-400' },
                  { name: 'Graphic', color: 'bg-yellow-400' },
                  { name: 'Language', color: 'bg-blue-400' }
                ].map((course, i) => (
                  <div key={i} className={`${course.color} rounded-lg h-12 flex items-center justify-center text-white text-xs font-medium`}>
                    {course.name}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
