import { useState, useEffect } from 'react'
import { AppAuthProvider } from './components/AuthProvider'
import { LoginPage } from './components/LoginPage'

function App() {
  const [mounted, setMounted] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

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
    <AppAuthProvider>
      {showLogin ? (
        <LoginPage />
      ) : (
        <div className="min-h-screen bg-gray-50">
          <header className="border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🍳</div>
                  <h1 className="text-3xl font-bold">Recipe Collection</h1>
                </div>
                <button 
                  onClick={() => setShowLogin(true)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Authentication Working!</h2>
              <p>You successfully logged in. Recipe functionality will be added next.</p>
            </div>
          </main>
        </div>
      )}
    </AppAuthProvider>
  )
}

export default App