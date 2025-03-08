import {
  AcademicCapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Learning Roadmaps',
    description: 'Structured learning paths for different programming languages and technologies.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and insights.',
    icon: ChartBarIcon,
  },
  {
    name: 'Resume Builder',
    description: 'Create professional resumes with our interactive builder and templates.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Mock Interviews',
    description: 'Practice with AI-powered mock interviews and get instant feedback.',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything You Need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All-in-One Learning Platform
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 