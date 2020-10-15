import React, { useState, useEffect } from 'react'
import { Carousel, Image } from 'antd'
import '../styles/components/Swiper.css'
import { getAxios } from '../request'

export default function Swiper() {
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
    <div className="common-swiper">
      <Carousel autoplay effect="fade" dots="true" className="swiper-content">
        {images.map((item, index) => (<Image key={index} src={item} width="100%" />))}
      </Carousel>
    </div>
  )
}

