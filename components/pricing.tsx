export default function Pricing() {
  const plans = [
    { 
      name: "Starter", 
      price: "$29",
      desc: "Perfect for beginners exploring new skills",
      features: ["Access to 50+ courses", "Community support"],
      highlighted: false
    },
    { 
      name: "Professional", 
      price: "$79",
      desc: "Ideal for serious learners advancing their career",
      features: ["All Starter features", "Access to 200+ courses", "Priority support"],
      highlighted: true
    },
    { 
      name: "Enterprise", 
      price: "Custom",
      desc: "For teams and organizations",
      features: ["All Professional features", "Unlimited courses", "Dedicated account manager"],
      highlighted: false
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your learning goals</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-8 transition ${
                plan.highlighted 
                  ? "bg-white border-2 border-blue-500 shadow-xl relative md:scale-105" 
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6 text-sm">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-600">/month</span>}
              </div>
              <button 
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
                    : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <span className="text-blue-600">✓</span>
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
