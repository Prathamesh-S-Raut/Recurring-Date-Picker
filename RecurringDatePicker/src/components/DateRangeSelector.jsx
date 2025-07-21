import React from 'react'
import { useRecurrence } from '../context/RecurrenceContext'

const DateRangeSelector = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurrence()

  return (
    <div className="space-y-2">
      <div>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-1"
        />
      </div>
      <div>
        <label>End Date (optional): </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-1"
        />
      </div>
    </div>
  )
}

export default DateRangeSelector
