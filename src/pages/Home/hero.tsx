import { useState } from "react";
import { Play, Users, Clock, Video, Star, TrendingUp, Award, CheckCircle } from "lucide-react";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">TradeMaster</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span>🇫🇷 Français</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Formation par Expert ICT</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Maîtrisez l'Art du{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Trading
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Plongez dans une expérience de formation unique qui vous ouvre les coulisses du
                marché. Vous n’allez pas seulement apprendre à trader — vous allez comprendre
                l’algorithme du marché, ses dynamiques cachées, et la logique derrière chaque
                mouvement. Aux côtés de professionnels expérimentés, vous développerez une vision
                stratégique, une gestion du risque maîtrisée, et une capacité à anticiper les flux
                du marché avec clarté. Ce n’est pas une simple formation. C’est une transformation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-3xl font-bold text-white">100+</span>
                </div>
                <p className="text-sm text-gray-400">Étudiants</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-3xl font-bold text-white">32+</span>
                </div>
                <p className="text-sm text-gray-400">Heures</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Video className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-3xl font-bold text-white">28</span>
                </div>
                <p className="text-sm text-gray-400">Vidéos</p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Stratégies éprouvées par des professionnels</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Gestion avancée des risques</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Analyse technique et fondamentale</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Support et communauté active</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Commencer Gratuitement
              </button>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Voir le Contenu
              </button>
            </div>
          </div>

          {/* Right Content - Video Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              {/* Video Introduction Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ICT</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Expert ICT</h3>
                    <p className="text-gray-400 text-sm">
                      Trader Professionnel • 5+ ans d'expérience
                    </p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Introduction à la Formation</h4>
                <p className="text-gray-300 text-sm">
                  Découvrez les secrets du trading professionnel et comment cette formation peut
                  révolutionner votre approche des marchés financiers.
                </p>
              </div>

              {/* Video Player */}
              <div className="relative group">
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
                  {!isVideoPlaying ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                      <button
                        onClick={handleVideoPlay}
                        className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-30"></div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Lecture de la vidéo...</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">4.9/5 (120+ avis)</span>
                  </div>
                  <span className="text-sm text-purple-400 font-medium">5 min d'aperçu</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Prêt à commencer ?</p>
                    <p className="text-sm text-gray-400">Regardez notre aperçu de 5 minutes</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                    Voir l'aperçu
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
