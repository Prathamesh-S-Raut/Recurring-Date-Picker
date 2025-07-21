import React from 'react'
import { useRecurrence } from '../context/RecurrenceContext'
import { generateRecurringDates } from '../utils/recurrenceUtils'

const CalendarPreview = () => {
  const {
    frequency,
    interval,
    selectedDays,
    pattern,
    startDate,
    endDate
  } = useRecurrence()

  const dates = generateRecurringDates({
    frequency,
    interval,
    selectedDays,
    pattern,
    startDate,
    endDate
  })

  return (
    <div className="bg-gray-50 p-3 rounded border">
      <h4 className="font-semibold mb-2">Preview:</h4>
      <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
        {dates.map((date, i) => (
          <span key={i} className="text-sm bg-white p-1 border rounded">
            {date}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CalendarPreview
