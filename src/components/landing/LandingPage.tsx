import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Users, Globe, Zap } from 'lucide-react';
import logo from '../../assets/logo.svg';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/welcome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
      </div>

      {/* Sticky Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <img src={logo} alt="ChatAndBuild Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-indigo-600">ChatAndBuild</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#community"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Community
                </a>
                <button
                  onClick={handleGetStarted}
                  className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-sm hover:shadow text-sm font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 p-2 bg-white/30 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50">
            <img src={logo} alt="ChatAndBuild Logo" className="h-20 w-20" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Community <span className="text-indigo-600">Spaces</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
            Connect, collaborate, and create with a community of builders and innovators.
            Share your projects and get valuable feedback from peers.
          </p>
          <button
            onClick={handleGetStarted}
            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-8 rounded-xl transition-all text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 w-full max-w-2xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">10k+</p>
              <p className="text-gray-600 mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">5k+</p>
              <p className="text-gray-600 mt-1">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">120+</p>
              <p className="text-gray-600 mt-1">Communities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Community Spaces?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides everything you need to connect, share, and grow with fellow creators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect with Peers</h3>
            <p className="text-gray-600">
              Join spaces based on your interests and connect with like-minded builders and creators.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Code className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Showcase Projects</h3>
            <p className="text-gray-600">
              Share your work, get feedback, and discover inspiring projects from the community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Grow Together</h3>
            <p className="text-gray-600">
              Learn from others, collaborate on ideas, and build your network in a supportive environment.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div id="community" className="container mx-auto px-4 py-20 relative z-10">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-md border border-white/50 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 border border-indigo-200">
              <Zap className="h-8 w-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join our growing community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Thousands of builders are already sharing ideas, getting feedback, and collaborating on exciting projects.
            </p>
            <button
              onClick={handleGetStarted}
              className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="ChatAndBuild Logo" className="h-6 w-6 mr-2" />
            <p className="text-gray-500">© 2023 Community Spaces. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
