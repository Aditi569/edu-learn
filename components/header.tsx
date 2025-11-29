export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
            EL
          </div>
          <h1 className="text-2xl font-bold text-gray-900">EduLearn</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium">Sign In</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  )
}
