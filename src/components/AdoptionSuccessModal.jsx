import React from 'react'

export default function AdoptionSuccessModal({ pet, onClose }) {
  if (!pet) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-md w-full mx-4 p-6 shadow-lg text-center">
        <div className="success-checkmark mb-4">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for choosing to adopt {pet.name}! We'll review your application and contact you within 24-48 hours.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-500">Next steps:</p>
          <ul className="text-sm text-gray-600 list-disc pl-5 mt-2 text-left">
            <li>Check your email for confirmation</li>
            <li>Prepare for a home visit</li>
            <li>Gather any additional references</li>
          </ul>
        </div>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}