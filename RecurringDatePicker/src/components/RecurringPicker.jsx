import React from 'react'
import FrequencySelector from './FrequencySelector'
import CustomizationOptions from './CustomizationOptions'
import DateRangeSelector from './DateRangeSelector'
import CalendarPreview from './CalendarPreview'

const RecurringPicker = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg space-y-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">Recurring Date Picker</h2>
      <FrequencySelector />
      <CustomizationOptions />
      <DateRangeSelector />
      <CalendarPreview />
    </div>
  )
}

export default RecurringPicker
