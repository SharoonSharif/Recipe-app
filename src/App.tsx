import { useState, useEffect } from 'react'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🍳</div>
              <h1 className="text-3xl font-bold text-gray-900">Recipe Collection</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Deployment Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Your recipe app is now running on Railway.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border max-w-md mx-auto">
            <h3 className="font-semibold mb-2">Next Steps:</h3>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>✓ Deployment working</li>
              <li>✓ Environment variables configured</li>
              <li>• Add authentication components</li>
              <li>• Add recipe functionality</li>
              <li>• Test all features</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App