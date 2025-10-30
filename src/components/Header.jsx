import React from 'react'

export default function Header({ onSearch, favoritesCount = 0 }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">PW</div>
          <div>
            <h1 className="text-xl font-bold">Pet Adoption Showcase</h1>
            <p className="text-xs text-gray-500">Find your new best friend</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            onChange={e => onSearch(e.target.value)}
            placeholder="Search pets, breed or age..."
            className="border rounded-md px-3 py-2 text-sm w-72"
          />

          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-3 text-sm text-gray-600">
              <a href="#pets" className="hover:text-indigo-600">Pets</a>
              <a href="#about" className="hover:text-indigo-600">About</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </nav>

            <div className="flex items-center gap-2">
              <button className="relative inline-flex items-center px-3 py-2 rounded-md border">
                <span className="text-red-500">❤</span>
                <span className="ml-2 text-sm text-gray-700">Favorites</span>
                {favoritesCount > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5">{favoritesCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}