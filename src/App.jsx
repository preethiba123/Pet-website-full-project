import React, { useMemo, useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import PetCard from './components/PetCard'
import PetModal from './components/PetModal'
import AdoptionForm from './components/AdoptionForm'
import AdoptionSuccessModal from './components/AdoptionSuccessModal'
import petsData from './data/pets'

export default function App() {
  const [query, setQuery] = useState('')
  const [filterType, setFilterType] = useState('All')
  const [selected, setSelected] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [adoptingPet, setAdoptingPet] = useState(null)
  const [showingForm, setShowingForm] = useState(null)
  const [adoptionSuccess, setAdoptionSuccess] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('pet_favs')
      if (raw) setFavorites(JSON.parse(raw))
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('pet_favs', JSON.stringify(favorites))
    } catch (e) {}
  }, [favorites])

  const types = useMemo(() => {
    const setTypes = new Set(petsData.map(p => p.type))
    return ['All', ...Array.from(setTypes)]
  }, [])

  const filtered = useMemo(() => {
    return petsData.filter(p => {
      const matchesQuery = [p.name, p.type, p.age, p.short, p.description].join(' ').toLowerCase().includes(query.toLowerCase())
      const matchesType = filterType === 'All' ? true : p.type === filterType
      return matchesQuery && matchesType
    })
  }, [query, filterType])

  function toggleFavorite(id) {
    setFavorites(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id)
      return [...prev, id]
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onSearch={setQuery} favoritesCount={favorites.length} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="bg-white rounded-2xl shadow p-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold">Find your new best friend</h2>
              <p className="text-gray-600 mt-2">Meet wonderful pets looking for their forever homes. Each one has been lovingly cared for and is ready to bring joy to your family.</p>
            </div>
            <div className="flex gap-2 items-center justify-end">
              <label className="text-sm text-gray-600">Filter</label>
              <select value={filterType} onChange={e => setFilterType(e.target.value)} className="border rounded-md px-3 py-2 text-sm">
                {types.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section id="pets" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <PetCard
              key={p.id}
              pet={p}
              onOpen={setSelected}
              onAdopt={setShowingForm}
              isFavorite={favorites.includes(p.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </section>

        <section id="about" className="bg-white rounded-2xl shadow p-6 mt-6">
          <h3 className="text-lg font-medium">About Our Pet Adoption Program</h3>
          <div className="mt-4 space-y-4 text-gray-600">
            <p>Welcome to our pet adoption center! We're dedicated to matching pets with loving families in our community. All our animals receive:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete veterinary check-ups and necessary vaccinations</li>
              <li>Behavioral assessment and basic training</li>
              <li>Microchipping for safety</li>
              <li>Spaying/neutering when age-appropriate</li>
            </ul>
            <p>Our adoption process includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Initial meet-and-greet with your chosen pet</li>
              <li>Home environment assessment to ensure a good fit</li>
              <li>Post-adoption support and guidance</li>
              <li>30-day follow-up to check on the adjustment period</li>
            </ul>
            <p className="text-sm italic">Note: We carefully screen all potential adopters to ensure our pets go to safe, loving homes. The adoption fee helps cover medical care, food, and shelter operations.</p>
          </div>
        </section>

        <Footer />
      </main>

      <PetModal 
        pet={selected} 
        onClose={() => setSelected(null)}
        onAdopt={setShowingForm}
      />
      
      {showingForm && (
        <AdoptionForm 
          pet={showingForm}
          onSubmit={(formData) => {
            setShowingForm(null)
            setAdoptionSuccess(showingForm)
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData)
          }}
          onCancel={() => setShowingForm(null)}
        />
      )}

      <AdoptionSuccessModal 
        pet={adoptionSuccess} 
        onClose={() => setAdoptionSuccess(null)} 
      />
    </div>
  )
}