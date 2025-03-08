import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Applically',
  description: 'Track your learning progress and manage your account',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Progress Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Frontend Development</span>
                  <span>60%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Backend Development</span>
                  <span>40%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm text-gray-600">Completed React Basics</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm text-gray-600">Started Node.js Course</p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Mock Interview</p>
                  <p className="text-xs text-gray-400">Tomorrow, 2:00 PM</p>
                </div>
                <button className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                  Prepare
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Complete Assignment</p>
                  <p className="text-xs text-gray-400">Due in 2 days</p>
                </div>
                <button className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}