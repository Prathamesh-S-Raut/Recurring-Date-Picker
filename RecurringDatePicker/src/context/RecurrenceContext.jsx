import React, { createContext, useContext, useState } from 'react'

const RecurrenceContext = createContext()

export const RecurrenceProvider = ({ children }) => {
  const [frequency, setFrequency] = useState('daily')
  const [interval, setInterval] = useState(1)
  const [selectedDays, setSelectedDays] = useState([])
  const [pattern, setPattern] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <RecurrenceContext.Provider
      value={{
        frequency,
        setFrequency,
        interval,
        setInterval,
        selectedDays,
        setSelectedDays,
        pattern,
        setPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  )
}

export const useRecurrence = () => useContext(RecurrenceContext)
