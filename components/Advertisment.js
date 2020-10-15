import React, { useState, useEffect } from 'react'
import { Image, Tag } from 'antd'
// import style
import '../styles/components/Advertisment.css'
// getAxios
import { getAxios } from '../request'

export default function Advertisment() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const getImages = async () => {
      const result = await getAxios('/blog/images/advImages')
      const list = result.data.map(item => item.adv_image)
      setImages(list)
    }
    getImages()
  })
  return (
    <div className="advertisment">
      <div className="adv-content">
        {images.map((item, index) => (
          <Image key={index} className="adv-image" src={item} width="100%" />
        ))}
        <Tag closable color="orange">广告位招租中。。。</Tag>
      </div>
    </div>
  )
}

// 

