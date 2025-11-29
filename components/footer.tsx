export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm">
                EL
              </div>
              <span className="font-bold text-lg text-white">EduLearn</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Empowering students worldwide to learn and grow.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-base">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; 2025 EduLearn. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-medium">𝕏</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-medium">f</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-medium">in</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm font-medium">⚙️</a>
          </div>
        </div>
      </div>
    </footer>
  )
}