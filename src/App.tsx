import { AppAuthProvider } from './components/AuthProvider'

function App() {
  return (
    <AppAuthProvider>
      <div className="min-h-screen bg-gray-50">
        <h1>Recipe Collection App</h1>
        <p>Your app is successfully deployed!</p>
      </div>
    </AppAuthProvider>
  )
}

export default App