import React from 'react'
import { useRecurrence } from '../context/RecurrenceContext'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const CustomizationOptions = () => {
  const {
    interval,
    setInterval,
    selectedDays,
    setSelectedDays,
    pattern,
    setPattern,
    frequency
  } = useRecurrence()

  const toggleDay = (day) => {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  return (
    <div className="space-y-3">
      <div>
        <label>Repeat every:</label>
        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border p-1 ml-2 w-16"
        />
        <span className="ml-2">{frequency}</span>
      </div>

      {frequency === 'weekly' && (
        <div className="flex gap-1">
          {daysOfWeek.map(day => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`px-2 py-1 border rounded ${
                selectedDays.includes(day)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      )}

      {frequency === 'monthly' && (
        <div>
          <label>Pattern: </label>
          <input
            type="text"
            placeholder="e.g., Second Tuesday"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className="border p-1 ml-2"
          />
        </div>
      )}
    </div>
  )
}

export default CustomizationOptions
