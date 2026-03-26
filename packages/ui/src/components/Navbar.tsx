import React from 'react'

interface NavbarProps {
  title: string
  emoji: string
  isLoggedIn?: boolean
  onLogin?: () => void
  onLogout?: () => void
}

export function Navbar({ title, emoji, isLoggedIn, onLogin, onLogout }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <span>{emoji}</span>
            <span>{title}</span>
          </a>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <a href="/dashboard" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Mi Panel
                </a>
                <button
                  onClick={onLogout}
                  className="text-sm font-medium text-gray-600 hover:text-gray-800"
                >
                  Salir
                </button>
              </>
            ) : (
              <button
                onClick={onLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Acceder
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
