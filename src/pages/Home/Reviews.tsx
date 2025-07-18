import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  date: string;
  country: string;
  countryFlag: string;
  verified: boolean;
}

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Linus Thom",
      title: "Experience with Xpert Funding",
      content: "I've had an exceptional experience with Xpert Funding. Their challenge is transparent and fair—if you trade with discipline, success is within reach. The spreads, view more...",
      rating: 5,
      date: "May 10, 2025",
      country: "Sweden",
      countryFlag: "🇸🇪",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Banal",
      title: "Just received my first Payout at Xpert...",
      content: "Just received my first Payout at Xpert funding. I'm really happy about the firm and the market conditions! I have been to many firms, but Xpert funding is high on the list with me!",
      rating: 5,
      date: "May 10, 2025",
      country: "Nepal",
      countryFlag: "🇳🇵",
      verified: true
    },
    {
      id: 3,
      name: "Sarah Johnson",
      title: "Just received my first Payout!",
      content: "Amazing prop firm new one recently got my first payout and im really happy about it. The support team is very responsive and helpful. Great experience overall!",
      rating: 5,
      date: "May 12, 2025",
      country: "United States",
      countryFlag: "🇺🇸",
      verified: true
    },
    {
      id: 4,
      name: "Marco Silva",
      title: "Excellent trading conditions",
      content: "The trading conditions are excellent, spreads are competitive, and the payout process is smooth. I've been trading with them for 6 months now and very satisfied.",
      rating: 5,
      date: "May 08, 2025",
      country: "Brazil",
      countryFlag: "🇧🇷",
      verified: true
    },
    {
      id: 5,
      name: "Ahmed Hassan",
      title: "Professional and reliable",
      content: "Professional service and reliable payouts. The challenge was fair and the support team helped me throughout the process. Highly recommended for serious traders.",
      rating: 5,
      date: "May 15, 2025",
      country: "Egypt",
      countryFlag: "🇪🇬",
      verified: true
    },
    {
      id: 6,
      name: "Emma Thompson",
      title: "Great support team",
      content: "The support team is amazing and always ready to help. Quick responses and professional service. The trading platform is user-friendly and stable.",
      rating: 5,
      date: "May 07, 2025",
      country: "United Kingdom",
      countryFlag: "🇬🇧",
      verified: true
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-green-400 text-green-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">
            Success Speaks For Itself
          </h2>

          {/* Trustpilot Badge */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg">
              <Star className="w-5 h-5 fill-white text-white" />
              <span className="text-white font-semibold">Trustpilot</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-white font-semibold">4.3/5</span>
            </div>
          </div>
        </div>

        {/* Reviews Slider Container */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 max-w-4xl mx-auto">
                  {/* Rating and Date */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                      <span className="text-gray-400 ml-2 text-sm">{review.rating}/5</span>
                    </div>
                    <span className="text-gray-400 text-sm">{review.date}</span>
                  </div>

                  {/* Review Title */}
                  <h3 className="text-white font-semibold text-xl mb-4">
                    {review.title}
                  </h3>

                  {/* Review Content */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-400/30" />
                    <p className="text-gray-300 leading-relaxed text-lg pl-6">
                      {review.content}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium text-lg">{review.name}</div>
                        {review.verified && (
                          <div className="flex items-center gap-1 text-green-400 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Verified Customer
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{review.countryFlag}</span>
                      <span className="text-gray-400">{review.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-400 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* See More Button - Bottom Right */}
        <div className="flex justify-end mt-12">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <span>See More Reviews</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4.3/5</div>
            <div className="text-gray-400">Trustpilot Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1,500+</div>
            <div className="text-gray-400">Verified Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Countries Represented</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
