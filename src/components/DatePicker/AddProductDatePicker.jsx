import React, { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddProductDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  const excludeTimes = [
    new Date().setHours(0, 0, 0, 0),
    new Date().setHours(12, 0, 0, 0),
    new Date().setHours(17, 0, 0, 0),
  ]

  return (
    <div className="relative p-[6px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ">
      <div className="flex items-center gap-5">
        <CiCalendar className="text-[20px] " />
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          excludeTimes={excludeTimes}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select date and time"
        />
      </div>
    </div>
  )
}

export default AddProductDatePicker
