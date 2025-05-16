import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, MessageSquare, Share2, ExternalLink, Github, Calendar, Globe, Twitter, Linkedin } from 'lucide-react'
import { formatDate } from '../../utils/dateUtils'

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()

  // This would normally come from an API or context
  // For now, we'll use mock data based on the projectId
  const projects = [
    {
      id: '1',
      title: 'Interactive Data Visualization Tool',
      description: 'Transform complex datasets into beautiful, interactive visualizations with no coding required.',
      longDescription: 'Transform complex datasets into beautiful, interactive visualizations with no coding required. This project was created to showcase the capabilities of AI in everyday applications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Natalie Wong',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'AI Developer & UX Designer',
        description: 'Passionate about creating intuitive, AI-powered applications that solve real-world problems. Specializes in user-centered design and modern web technologies.'
      },
      likes: 433,
      comments: 2,
      views: 1967,
      remixes: 42,
      tags: ['Data', 'Visualization', 'No-Code'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/data-viz-tool',
      websiteUrl: 'https://example.com',
      twitterUrl: 'https://twitter.com/example',
      linkedinUrl: 'https://linkedin.com/in/example',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Data', 'Visualization', 'No-Code'],
      screenshots: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      createdAt: '2023-10-08T10:30:00Z',
      lastUpdated: '2023-10-08T10:30:00Z',
      lastComment: '2023-10-06T10:30:00Z',
      followers: 324
    },
    {
      id: '2',
      title: 'Virtual Reality Meditation Space',
      description: 'A VR application that creates immersive meditation environments with guided sessions and biofeedback integration.',
      longDescription: 'This VR meditation application transports users to serene natural environments designed specifically for mindfulness practice. It features guided meditation sessions led by experienced instructors, ambient soundscapes recorded in 3D audio, and optional biofeedback integration via compatible wearables. The app adapts the environment based on the user\'s stress levels and meditation goals, creating a truly personalized experience.',
      image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Maya Patel',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'XR developer and meditation practitioner. Creating technology that enhances mental wellbeing and mindfulness.'
      },
      likes: 89,
      comments: 7,
      tags: ['VR', 'Wellness', 'Unity'],
      demoUrl: 'https://example.com/vr-demo',
      githubUrl: 'https://github.com/example/vr-meditation',
      techStack: ['Unity', 'C#', 'Oculus SDK', 'Bluetooth LE'],
      screenshots: [
        'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      createdAt: '2023-07-22T14:45:00Z'
    },
    // Other projects remain the same...
    {
      id: '3',
      title: 'Sustainable Food Delivery Platform',
      description: 'An eco-friendly food delivery service that connects users with local restaurants using zero-waste packaging.',
      longDescription: 'This platform revolutionizes food delivery by prioritizing sustainability at every step. It partners exclusively with restaurants committed to eco-friendly practices and uses a fleet of electric bikes and vehicles for delivery. All meals are packaged in compostable or reusable containers, and customers can opt into a container return program for additional discounts. The app also calculates and displays the carbon footprint saved with each order compared to traditional delivery services.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Carlos Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'Environmental engineer turned developer. Building tech solutions for a more sustainable future.'
      },
      likes: 56,
      comments: 12,
      tags: ['Sustainability', 'Food', 'Mobile App'],
      demoUrl: 'https://example.com/eco-food-demo',
      githubUrl: 'https://github.com/example/eco-food-delivery',
      techStack: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      screenshots: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      createdAt: '2023-08-05T09:15:00Z'
    },
    {
      id: '4',
      title: 'Collaborative Music Creation Tool',
      description: 'A web platform that allows musicians to collaborate remotely on tracks with real-time editing and mixing capabilities.',
      longDescription: 'This collaborative platform enables musicians around the world to create together in real-time. It features a multi-track audio editor with version control, real-time collaboration tools, and integrated video chat. Musicians can record directly in the browser, import existing tracks, and apply professional-grade effects. The platform handles latency intelligently to ensure a smooth jamming experience even across continents. Finished projects can be exported in various formats or published directly to streaming platforms.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Jamie Lee',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'Audio engineer and web developer. Creating tools that make music production more accessible and collaborative.'
      },
      likes: 210,
      comments: 34,
      tags: ['Music', 'Collaboration', 'Web Audio'],
      demoUrl: 'https://example.com/music-collab-demo',
      githubUrl: 'https://github.com/example/music-collab',
      techStack: ['WebRTC', 'Web Audio API', 'React', 'WebSockets', 'AWS'],
      screenshots: [
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      createdAt: '2023-09-12T16:20:00Z'
    },
    {
      id: '5',
      title: 'Smart Home Energy Monitor',
      description: 'An IoT device and companion app that tracks and optimizes home energy usage with AI-powered recommendations.',
      longDescription: 'This comprehensive energy monitoring system combines hardware sensors with intelligent software to give homeowners unprecedented insight into their energy consumption. The system identifies energy-hungry appliances, detects inefficient usage patterns, and provides actionable recommendations for reducing consumption. The AI learns from your habits and automatically adjusts connected smart home devices to optimize energy usage without sacrificing comfort. Users typically see 15-30% reduction in energy bills within the first three months.',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Sarah Kim',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'IoT specialist and clean energy advocate. Building smart solutions for more efficient and sustainable homes.'
      },
      likes: 76,
      comments: 9,
      tags: ['IoT', 'Energy', 'Sustainability'],
      demoUrl: 'https://example.com/energy-monitor-demo',
      githubUrl: 'https://github.com/example/smart-energy',
      techStack: ['ESP32', 'MQTT', 'TensorFlow Lite', 'React Native', 'AWS IoT'],
      screenshots: [
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      createdAt: '2023-10-03T11:05:00Z'
    },
    {
      id: '6',
      title: 'Augmented Reality Language Learning',
      description: 'An AR app that helps users learn new languages by overlaying translations and pronunciation guides on real-world objects.',
      longDescription: 'This innovative language learning application uses augmented reality to make vocabulary acquisition intuitive and contextual. Users simply point their camera at objects around them, and the app identifies the items and displays their names in the target language, complete with pronunciation guides. The spaced repetition system tracks which words you\'ve learned and which need review, creating a personalized learning experience. The app supports 12 languages with plans to add more based on user demand.',
      image: 'https://images.unsplash.com/photo-1546777701-8ef25158125a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'David Chen',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'AR/VR developer and language enthusiast. Creating immersive educational experiences through technology.'
      },
      likes: 143,
      comments: 21,
      tags: ['AR', 'Education', 'Mobile App'],
      demoUrl: 'https://example.com/ar-language-demo',
      githubUrl: 'https://github.com/example/ar-language',
      techStack: ['ARKit', 'ARCore', 'Unity', 'ML Kit', 'Firebase'],
      screenshots: [
        'https://images.unsplash.com/photo-1546777701-8ef25158125a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ],
      createdAt: '2023-11-18T13:40:00Z'
    }
  ]

  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/community')}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Back to Community
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header with title and creation date */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        {project.title}
      </h1>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Calendar className="h-4 w-4 mr-2" />
        <span>Created on {formatDate(project.createdAt, true)} • {project.views} views</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/community')}
          className="flex items-center text-gray-600 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>
        
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            <Heart className="h-4 w-4 inline mr-2" />
            <span>{project.likes}</span>
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Remix <span className="ml-1">{project.remixes}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - 2/3 width on desktop */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="p-6">
              <div className="mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Project Preview</h2>
                <p className="text-gray-600">
                  This is an interactive preview of the project. You can explore its features and functionality.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Open Full Preview
                </button>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Project Activity</h2>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Last comment 2 days ago</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Updated {formatDate(project.lastUpdated)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Project Details</h2>
                <p className="text-gray-600 mb-4">
                  {project.longDescription}
                </p>
                <p className="text-gray-600">
                  This project demonstrates how AI can be leveraged to enhance productivity and streamline daily tasks. The implementation uses modern web technologies and focuses on providing an intuitive user experience.
                </p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Comments</h2>
            </div>
            
            <div className="p-6">
              <div className="flex items-start space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                  alt="User avatar"
                  className="h-10 w-10 rounded-full"
                />
                <textarea 
                  placeholder="Add a comment..."
                  className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  rows={3}
                ></textarea>
              </div>
              <div className="mt-3 text-right">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - 1/3 width on desktop */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold">About this project</h2>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                {project.longDescription}
              </p>
              
              <div className="flex space-x-2 mb-6">
                <button className="flex-1 flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  <Heart className="h-4 w-4 mr-2" />
                  <span>{project.likes}</span>
                </button>
                <button className="flex-1 flex justify-center items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                  Remix <span className="ml-1">{project.remixes}</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Project Categories</h2>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold">About the builder</h2>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={project.author.avatar} 
                  alt={project.author.name}
                  className="h-12 w-12 rounded-full mr-3"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80";
                  }}
                />
                <div>
                  <h3 className="font-medium text-gray-900">{project.author.name}</h3>
                  <p className="text-sm text-gray-500">{project.author.bio}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {project.author.description || "No description available."}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.websiteUrl && (
                  <a 
                    href={project.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-indigo-600"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    Website
                  </a>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-indigo-600"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                )}
                
                {project.twitterUrl && (
                  <a 
                    href={project.twitterUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-indigo-600"
                  >
                    <Twitter className="h-4 w-4 mr-1" />
                    Twitter
                  </a>
                )}
                
                {project.linkedinUrl && (
                  <a 
                    href={project.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-600 hover:text-indigo-600"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </a>
                )}
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <span>{project.followers || 0} followers</span>
                <button className="ml-auto px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Follow
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Project Stats</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{project.likes}</div>
                  <div className="text-sm text-gray-500">Upvotes</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{project.remixes}</div>
                  <div className="text-sm text-gray-500">Remixes</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{project.comments}</div>
                  <div className="text-sm text-gray-500">Comments</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{project.views}</div>
                  <div className="text-sm text-gray-500">Views</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 text-center">
                <div className="flex items-center justify-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Last updated: {formatDate(project.lastUpdated, true)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
