import Link from 'next/link'

export default function CallToAction() {
  return (
    <div className="bg-indigo-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to boost your career?
          <br />
          <span className="text-indigo-600">Start your journey today.</span>
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="/signup"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started for free
          </Link>
          <Link
            href="/roadmaps"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            View learning paths <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">
              Trusted by thousands of learners worldwide
            </h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Active Users</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">10k+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Learning Paths</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">50+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Practice Questions</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">5000+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Success Stories</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">1000+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
} 