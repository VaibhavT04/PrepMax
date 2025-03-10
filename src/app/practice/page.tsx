import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice & Mock Interviews | Applically',
  description: 'Practice coding problems and prepare for technical interviews',
}

const practiceCategories = [
  {
    title: 'Coding Problems',
    description: 'Practice algorithmic and data structure problems',
    count: '500+ Problems',
    icon: '💻'
  },
  {
    title: 'Mock Interviews',
    description: 'Simulate real interview experiences',
    count: '50+ Scenarios',
    icon: '🎯'
  },
  {
    title: 'System Design',
    description: 'Learn to design scalable systems',
    count: '30+ Cases',
    icon: '🏗️'
  },
  {
    title: 'Behavioral Questions',
    description: 'Prepare for non-technical interviews',
    count: '200+ Questions',
    icon: '🤝'
  }
]

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Practice & Preparation
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Enhance your skills with practice problems and mock interviews
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {practiceCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-gray-600">{category.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {category.count}
                  </span>
                </div>
                <button className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Start Practice
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
