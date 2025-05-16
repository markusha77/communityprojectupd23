import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import logo from '../assets/logo.svg'

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="ChatAndBuild Logo" className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-indigo-600">ChatAndBuild</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build amazing projects through conversation. Our AI-powered platform helps you create, collaborate, and share your ideas with the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Community Projects</h2>
            <p className="text-gray-600 mb-6">
              Discover projects created by other users, get inspired, and learn from their implementations. Filter by categories, technologies, and more.
            </p>
            <Link 
              to="/community" 
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
            >
              Browse Community
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Building</h2>
            <p className="text-gray-600 mb-6">
              Create your own project using our conversational AI builder. Just describe what you want to build, and we'll help you bring it to life.
            </p>
            <Link 
              to="/builder" 
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
            >
              Launch Builder
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-indigo-600 rounded-xl shadow-sm p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join our community of builders and create something amazing today. No coding experience required!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/signup" 
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </Link>
            <Link 
              to="/signin" 
              className="px-6 py-3 bg-indigo-700 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
