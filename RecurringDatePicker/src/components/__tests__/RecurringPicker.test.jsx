import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { RecurrenceProvider } from '../../context/RecurrenceContext'
import RecurringPicker from '../RecurringPicker'

describe('RecurringPicker Integration', () => {
  it('renders all subcomponents and updates state', () => {
    render(
      <RecurrenceProvider>
        <RecurringPicker />
      </RecurrenceProvider>
    )

    // Check initial render
    expect(screen.getByText(/Recurring Date Picker/i)).toBeInTheDocument()
    expect(screen.getByText(/Daily/i)).toBeInTheDocument()

    // Change frequency
    fireEvent.click(screen.getByText('Weekly'))
    expect(screen.getByText('Weekly')).toHaveClass('bg-blue-500')

    // Set start date
    const startDateInput = screen.getByLabelText(/Start Date/i)
    fireEvent.change(startDateInput, { target: { value: '2025-07-01' } })
    expect(startDateInput.value).toBe('2025-07-01')

    // Preview section should exist
    expect(screen.getByText(/Preview/i)).toBeInTheDocument()
  })
})
