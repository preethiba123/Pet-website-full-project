import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">About</h4>
          <p className="text-sm text-gray-600 mt-2">This demo site showcases a small React + Vite + Tailwind app for learning CI/CD, containerization and IaC patterns.</p>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-gray-600 mt-2">Email: hello@pet-demo.local (example)</p>
          <p className="text-sm text-gray-600 mt-1">Location: Demo City</p>
        </div>
      </div>
      <div className="border-t bg-white py-3 text-center text-xs text-gray-500">© {new Date().getFullYear()} Pet Adoption Showcase</div>
    </footer>
  )
}