import React from "react";
import { Check, Star, MessageCircle } from "lucide-react";

const TradingOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Complete Course",
      subtitle: "Access to all premium video content",
      price: "$250",
      priceSubtext: "One-time payment",
      features: [
        "25 comprehensive video lessons",
        "40+ hours of content",
        "Lifetime access to course materials",
        "Downloadable resources and worksheets",
        "Certificate of completion",
        "30-day money-back guarantee"
      ],
      buttonText: "Get Started Now",
      cardBg: "bg-gray-800",
      headerBg: "bg-gray-900",
      buttonStyle:
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
      textColor: "text-white",
      subtitleColor: "text-gray-300",
      featureColor: "text-gray-200",
      iconColor: "text-green-400",
      featured: false
    },
    {
      id: 2,
      title: "VIP Mentorship",
      subtitle: "Course + Live sessions with instructor",
      price: "Custom",
      priceSubtext: "Contact for pricing",
      features: [
        "Everything in Complete Course",
        "Weekly live trading sessions",
        "Direct access to instructor",
        "Private Telegram/WhatsApp group",
        "Personalized trading strategy review",
        "1-on-1 mentorship calls",
        "Priority support and feedback"
      ],
      buttonText: "Contact for Details",
      cardBg: "bg-gradient-to-br from-purple-700 to-purple-900",
      headerBg: "bg-gradient-to-br from-purple-800 to-purple-950",
      buttonStyle:
        "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-semibold",
      textColor: "text-white",
      subtitleColor: "text-purple-100",
      featureColor: "text-purple-50",
      iconColor: "text-yellow-400",
      featured: true,
      badge: "OFFRE SPÉCIALE"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Start your trading journey with our comprehensive courses
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map(offer => (
            <div
              key={offer.id}
              className={`relative ${offer.cardBg} rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-700`}
            >
              {/* Badge */}
              {offer.featured && (
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 border-2 border-white">
                    {offer.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`${offer.headerBg} p-8 text-center`}>
                <h3 className={`text-2xl font-bold ${offer.textColor} mb-2`}>{offer.title}</h3>
                <p className={`${offer.subtitleColor} mb-6`}>{offer.subtitle}</p>

                <div className="mb-4">
                  <span className={`text-4xl font-bold ${offer.textColor}`}>{offer.price}</span>
                  <p className={`${offer.subtitleColor} mt-1`}>{offer.priceSubtext}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {offer.featured ? (
                        <Star
                          className={`w-5 h-5 ${offer.iconColor} mt-0.5 flex-shrink-0`}
                          fill="currentColor"
                        />
                      ) : (
                        <Check className={`w-5 h-5 ${offer.iconColor} mt-0.5 flex-shrink-0`} />
                      )}
                      <span className={`${offer.featureColor} leading-relaxed`}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${offer.buttonStyle} flex items-center justify-center space-x-2 shadow-lg transform hover:scale-[1.02]`}
                >
                  {offer.id === 2 && <MessageCircle className="w-5 h-5" />}
                  <span>{offer.buttonText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingOffers;
