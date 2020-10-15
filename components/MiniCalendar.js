import React from 'react'
import { Calendar } from 'antd'
import '../styles/components/MiniCalendar.css'

export default function MiniCalendar() {
  return (
    <div className="calendar-content">
      <Calendar fullscreen={false} />
    </div>
  )
}


