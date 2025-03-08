import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Roadmaps | Applically',
  description: 'Structured learning paths for different programming languages and technologies',
}

const roadmaps = [
  {
    title: 'Frontend Development',
    description: 'Learn HTML, CSS, JavaScript, and modern frontend frameworks',
    level: 'Beginner to Advanced',
    image: '/roadmaps/frontend.png', // Add these images to your public folder
    topics: ['HTML & CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript']
  },
  {
    title: 'Backend Development',
    description: 'Master server-side programming and database management',
    level: 'Intermediate',
    image: '/roadmaps/backend.png',
    topics: ['Node.js', 'Python', 'Databases', 'API Design', 'Security']
  },
  {
    title: 'Full Stack Development',
    description: 'Become proficient in both frontend and backend technologies',
    level: 'Advanced',
    image: '/roadmaps/fullstack.png',
    topics: ['Frontend', 'Backend', 'DevOps', 'System Design', 'Testing']
  },
]

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Learning Roadmaps
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose your path and start learning systematically
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((roadmap) => (
            <div
              key={roadmap.title}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {roadmap.title}
                </h3>
                <p className="mt-2 text-gray-600">{roadmap.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {roadmap.level}
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Key Topics:</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {roadmap.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 rounded-md text-gray-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}