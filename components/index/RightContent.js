import React from 'react'
import Author from '../Author'
import Advertisment from '../Advertisment'
import MiniCalendar from '../MiniCalendar'

export default function RightContent(props) {
  const { images } = props
  return (
    <div className="index-right-context">
      <Author />
      <MiniCalendar />
      <Advertisment images={images} />
    </div>
  )
}
