import React from 'react'
import Author from '../Author'
// import Advertisment from '../Advertisment'
import Swiper from '../Swiper'

export default function RightContent(props) {
  const { images } = props
  return (
    <div className="list-right-context">
      <Author />
      {/* <Advertisment /> */}
      <Swiper images={images} />
    </div>
  )
}
