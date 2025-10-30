import React from 'react'

export default function PetModal({ pet, onClose, onAdopt }) {
  if (!pet) return null

  const handleAdopt = () => {
    onClose() // Close the modal first
    onAdopt(pet) // Then show the adoption form
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 shadow-lg overflow-hidden">
        <img src={pet.image} alt={pet.name} className="pet-modal-image" />
        <div className="p-6">
          <div className="flex gap-6">
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold">{pet.name}</h3>
                <p className="text-gray-500">{pet.type} • {pet.age}</p>
              </div>
              <button onClick={onClose} className="text-gray-500">Close</button>
            </div>
            <p className="mt-3 text-gray-700">{pet.description}</p>
            <div className="mt-4">
              <strong>Good with:</strong>
              <p className="text-sm text-gray-600">{pet.goodWith}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                onClick={handleAdopt}
                className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Apply to Adopt
              </button>
              <button 
                onClick={onClose} 
                className="px-3 py-2 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}