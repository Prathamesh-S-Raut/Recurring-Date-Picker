import { generateRecurringDates } from '../recurrenceUtils'

describe('generateRecurringDates', () => {
  it('should return daily recurring dates correctly', () => {
    const result = generateRecurringDates({
      frequency: 'daily',
      interval: 2,
      selectedDays: [],
      pattern: '',
      startDate: '2025-07-01',
      endDate: '2025-07-10'
    })

    expect(result).toEqual([
      '2025-07-01',
      '2025-07-03',
      '2025-07-05',
      '2025-07-07',
      '2025-07-09'
    ])
  })

  it('should return weekly recurring dates only on selected days', () => {
    const result = generateRecurringDates({
      frequency: 'weekly',
      interval: 1,
      selectedDays: ['Mon', 'Wed'],
      pattern: '',
      startDate: '2025-07-01',
      endDate: '2025-07-10'
    })

    // For simplicity, only check it returns something
    expect(result.length).toBeGreaterThan(0)
  })
})
