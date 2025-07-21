# 🗓️ Recurring Date Picker Component

This project is a reusable **Recurring Date Picker** component built using **React**, **Tailwind CSS**, and **React Context API**. It allows users to configure recurring events with options similar to those found in apps like **TickTick** or **Google Calendar**.

---

## 🚀 Features

- 📆 Recurrence Options:
  - Daily
  - Weekly
  - Monthly
  - Yearly

- ⚙️ Customization:
  - Every X days/weeks/months/years
  - Select specific weekdays
  - Patterns like "Second Tuesday of every month"

- 📅 Date Range:
  - Select start date
  - Optional end date

- 🔢 Limit Generator:
  - Specify how many upcoming occurrences to generate

- 🖼️ Mini Calendar Preview:
  - Displays generated recurring dates visually

- 🧠 Built with:
  - React + Context API for state management
  - Tailwind CSS for styling
  - Utility-based date generation logic

---

## 🧪 Testing

- ✅ Unit tests written for core logic (e.g., date generation)
- ✅ Integration test for full RecurringPicker component

> Run tests using:
 ``` npm test


🏗️Folder Structure
src
├── components/
│   ├── CalendarPreview.jsx
│   ├── CustomizationOptions.jsx
│   ├── DateRangeSelector.jsx
│   ├── FrequencySelector.jsx
│   └── RecurringPicker.jsx
│
├── context/
│   └── RecurrenceContext.jsx
│
├── utils/
│   └── recurrenceUtils.js
│
├── App.jsx
├── index.js
├── style.css
└── package.json


# 📦 Getting Started
1. Clone the Repository

git clone https://github.com/your-username/recurring-date-picker.git
cd recurring-date-picker

2. Install Dependencies
npm install


## 📸 Screenshot

![App Screenshot](screenshot.png)


3. Start the Development Server
npm run dev

