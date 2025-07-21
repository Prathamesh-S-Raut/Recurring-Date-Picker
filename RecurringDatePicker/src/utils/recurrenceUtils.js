import { format, addDays, addWeeks, addMonths, addYears, isBefore } from 'date-fns'

export const generateRecurringDates = ({
  frequency,
  interval,
  selectedDays,
  pattern,
  startDate,
  endDate
}) => {
  if (!startDate) return []

  let current = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date(current.getFullYear() + 1, current.getMonth(), current.getDate())

  const dates = []

  while (isBefore(current, end)) {
    const formatted = format(current, 'yyyy-MM-dd')

    if (frequency === 'weekly' && selectedDays.length > 0) {
      const day = format(current, 'eee')
      if (selectedDays.includes(day)) dates.push(formatted)
    } else if (frequency !== 'weekly') {
      dates.push(formatted)
    }

    switch (frequency) {
      case 'daily':
        current = addDays(current, interval)
        break
      case 'weekly':
        current = addDays(current, 1)
        break
      case 'monthly':
        current = addMonths(current, interval)
        break
      case 'yearly':
        current = addYears(current, interval)
        break
      default:
        break
    }
  }

  return dates
}
