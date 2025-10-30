import React from 'react'

export default function PetCard({ pet, onOpen, onAdopt, isFavorite, toggleFavorite }) {
  return (
    <article className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className="pet-image-container">
        <img src={pet.image} alt={pet.name} className="pet-image" />
        <button onClick={() => toggleFavorite(pet.id)} className="absolute top-2 right-2 bg-white/80 rounded-full p-2">
          <span className={`text-xl ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}>{isFavorite ? '❤' : '♡'}</span>
        </button>
      </div>
      <h2 className="mt-3 text-xl font-semibold">{pet.name}</h2>
      <p className="text-sm text-gray-500">{pet.type} • {pet.age} • <span className="text-xs text-gray-400">{pet.location}</span></p>
      <p className="mt-2 text-gray-700 flex-1">{pet.short}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onOpen(pet)} className="px-3 py-2 rounded-lg border text-sm">View</button>
        <button onClick={() => onAdopt(pet)} className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors">Adopt</button>
      </div>
    </article>
  )
}