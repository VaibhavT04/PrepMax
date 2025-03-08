import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume Builder | Applically',
  description: 'Create professional resumes with our interactive builder',
}

const resumeTemplates = [
  {
    name: 'Professional',
    description: 'Clean and modern design for experienced professionals',
    suitable: 'Best for corporate roles',
    preview: '/resumes/professional.png' // Add these images to your public folder
  },
  {
    name: 'Creative',
    description: 'Stand out with a unique and creative layout',
    suitable: 'Perfect for design roles',
    preview: '/resumes/creative.png'
  },
  {
    name: 'Technical',
    description: 'Highlight your technical skills and projects',
    suitable: 'Ideal for tech positions',
    preview: '/resumes/technical.png'
  },
  {
    name: 'Academic',
    description: 'Structured layout for academic and research positions',
    suitable: 'Great for research roles',
    preview: '/resumes/academic.png'
  }
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Resume Builder
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Create professional resumes that stand out
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {resumeTemplates.map((template) => (
            <div
              key={template.name}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {template.name}
                </h3>
                <p className="mt-2 text-gray-600">{template.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {template.suitable}
                  </span>
                </div>
                <button className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}