import React from 'react'
import { useRecurrence } from '../context/RecurrenceContext'

const FrequencySelector = () => {
  const { frequency, setFrequency } = useRecurrence()

  return (
    <div className="space-x-2">
      {['daily', 'weekly', 'monthly', 'yearly'].map(option => (
        <button
          key={option}
          onClick={() => setFrequency(option)}
          className={`px-4 py-1 rounded-full border ${
            frequency === option ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default FrequencySelector
